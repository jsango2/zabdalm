import React, { useState, useEffect, useRef } from "react"
import "../../i18next"

import { useTranslation } from "react-i18next"
import { GoInfo } from "react-icons/go"
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp"
// import Geocoder from "react-mapbox-gl-geocoder"
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import styled from "styled-components"
// import { CgMenuGridR } from "react-icons/cg"
import firebase from "gatsby-plugin-firebase"

import "mapbox-gl/dist/mapbox-gl.css"
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import camera1 from "../../content/assets/camera1.png"
// import { withTheme } from "styled-components"
import SliderGodina from "../components/SliderGodina"
import { useWindowSize } from "../components/useWindowSize"
// import { parse } from "postcss"
// import LoaderSpinner from "./../components/LoaderSpinner"
// import MeniMobile from "../components/meniMobile"
// import GooglePhotos from "../components/testGooglePhotosApi"
// import FirebaseData from "../components/testGooglePhotosApi"
import Header from "./../components/header"
import i18next from "i18next"
import SEO from "../components/seo"

import InfoBlock from "../components/InfoBlock"
import { useOnClickOutside } from "../components/useClickOutside"
mapboxgl.workerClass = MapboxWorker
mapboxgl.accessToken =
  "pk.eyJ1IjoibG92cmVwZXJhaWMiLCJhIjoiY2p1bDFnN29jMjJqbjN5cGcxbnp2d2ZtMSJ9.nooF3ezg5yH_NBrmGjKQUw"

const InfoWrap = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #4e370c;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  right: 26px;
  top: 95px;
  z-index: 2;
  color: white;
  cursor: pointer;
  /* @media screen and (max-width: 1152px) {
    right: 26px;
    top: 75px;
    left: unset;
  } */
  @media screen and (max-width: 630px) {
    right: 26px;
    top: 102px;
    left: unset;
  }
`

function Razglednice({ data }) {
  const { t } = useTranslation()
  const size = useWindowSize()
  const mapContainer = useRef()
  const [value, setValue] = useState([1889, 1970])
  const [value2, setValue2] = useState([1890, 1970])
  const [innerHeight, setInnerHeight] = useState(null)
  const [lng, setLng] = useState(16.7469)
  const [lat, setLat] = useState(42.7781)
  const [zoom, setZoom] = useState(4)
  const [hasPoints, setHasPoints] = useState(false)

  const [item, setItem] = useState([])
  const [featuresArr, setFeaturesArr] = useState([])
  const [show, setShow] = useState(false)
  const [popupFrame, setPopupFrame] = useState(null)
  const [popupOn, setPopupOn] = useState(false)

  const [geoData, setGeoData] = useState([])
  const [geoData2, setGeoData2] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const [lang, setLang] = useState(i18next.language)

  useEffect(() => {
    setLang(i18next.language)
    console.log(typeof i18next.language)
  }, [i18next.language])
  // var flickrs = new Flickr("fd4a1bda8ebe5a6c92d2e206c9df0e16")

  // useEffect(() => {
  //   var ref = firebase.database().ref("/")
  //   var listen = ref.on("value", snapshot => {
  //     var listaPodataka = []
  //     snapshot.forEach(snap => {
  //       var key = snap.key
  //       var data = snap.val()
  //       // console.log(data)

  //       listaPodataka.push({
  //         type: "Feature",
  //         properties: {
  //           datum_uploada: parseInt(data.DateCreated.substring(0, 4)),
  //           image_url_thumb: data.Photo200px,
  //           image_url: data.Photo1000px,
  //           title_naslov: data.Title,
  //           longitude: data.GPSLongitude,
  //           latitude: data.GPSLatitude,
  //           icon: {
  //             iconUrl: data.Photo200px,
  //             iconSize: [50, 50], // size of the icon
  //             iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  //             popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
  //             className: "dot",
  //           },
  //         },
  //         geometry: {
  //           type: "Point",
  //           coordinates: [data.GPSLongitude, data.GPSLatitude],
  //         },
  //       })
  //     })
  //     const geoJsonedFlickr = {
  //       type: "FeatureCollection",
  //       features: listaPodataka,
  //     }
  //     setGeoData(geoJsonedFlickr)
  //     console.log("geo:", geoJsonedFlickr)
  //   })

  //   return () => ref.off("value", listen)
  // }, [])

  useEffect(() => {
    var docRef = firebase
      .firestore()
      .collection("razglednice")
      .doc("NqvGaUO7WsimzLcSgK6Z")
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data())
          setGeoData(doc.data().geoData)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!")
        }
      })
      .catch(error => {
        console.log("Error getting document:", error)
      })
  }, [])

  // useEffect(() => {
  //   firebase.firestore().collection("razglednice").add({ geoData })
  // }, [geoData])
  // useEffect(() => {
  //   flickrs.galleries
  //     .getPhotos({
  //       gallery_id: "72157718768762512",
  //       extras: [
  //         "description",
  //         "geo",
  //         "tags",
  //         "url_m",
  //         "title",
  //         "date_upload",
  //         "machine_tags",
  //       ],
  //       per_page: 500,
  //     })
  //     .then(function (res) {
  //       // setFlickr(res.body);
  //       setPages(res.body.photos.pages)
  //     })
  //     .catch(function (err) {
  //       console.error("bonk", err)
  //     })
  // }, [])

  // useEffect(() => {
  //   fetch(
  //     "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=a89feeb9b87040fa489bf851c810f121&gallery_id=72157718730942627&extras=description%2C+geo%2C+tags%2C+url_c%2Ctitle%2C+date_upload%2C+machine_tags%2C&per_page=500&page=1&format=json&nojsoncallback=1&auth_token=72157719145080653-a05d7fb32349048e&api_sig=b561e26a0c426c700ce275ee04627c4b"
  //   )
  //     .then(res => res.json())
  //     .then(data => setFlickr(data.photos.photo))
  // }, [])

  // useEffect(() => {
  //   if (pages !== undefined) {
  //     // console.log("pages:", pages)
  //     let arrayFlickr = []
  //     for (let index = 1; index <= pages; index++) {
  //       // console.log("index", index)
  //       flickrs.people
  //         .getPublicPhotos({
  //           user_id: "192971463@N03",
  //           extras: [
  //             "description",
  //             "geo",
  //             "tags",
  //             "url_t",
  //             "url_c",
  //             "title",
  //             "date_taken",
  //             "machine_tags",
  //           ],
  //           per_page: 500,
  //           page: index,
  //         })
  //         .then(function (res) {
  //           // console.log("res:", res)
  //           arrayFlickr.push(res.body.photos.photo)
  //           setFlickr(arrayFlickr.flat())
  //         })
  //         .catch(function (err) {
  //           console.error("bonk", err)
  //         })
  //     }
  //   }
  // }, [pages])
  // console.log('izlaz:::::', array);

  // useEffect(() => {
  //   console.log("flickr", flickr)
  //   if (flickr.length !== 0 || flickr.length !== undefined) {
  //     const geoJsonedFlickr = {
  //       type: "FeatureCollection",
  //       features: flickr.map(photo => ({
  //         type: "Feature",
  //         properties: {
  //           title_naslov: photo.title,
  //           image_url_thumb: photo.photo200px,
  //           image_url: photo.photo1000px,
  //           // description: photo.title,
  //           // tags: photo.tags,
  //           datum_uploada: photo.godina,
  //           // machine_tags: photo.machine_tags,
  //           coordinates: [photo.longitude, photo.latitude],
  //           icon: {
  //             iconUrl: photo.photo200px,
  //             iconSize: [50, 50], // size of the icon
  //             iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  //             popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
  //             className: "dot",
  //           },
  //         },
  //         geometry: {
  //           type: "Point",
  //           coordinates: [photo.longitude, photo.latitude],
  //         },
  //       })),
  //     }

  //     setGeoData(geoJsonedFlickr)

  //   }
  // }, [flickr])

  useEffect(() => {
    // console.log("geodata", geoData)
    if (geoData.length !== 0) {
      var filtrirano = geoData.features.filter(
        razglednica =>
          razglednica.properties.datum_uploada >= value2[0] &&
          razglednica.properties.datum_uploada <= value2[1]
      )
    }
    var objectFiltrirano = {
      type: "FeatureCollection",
      features: filtrirano,
    }

    // console.log("gefiltert XXXXXXXXXXXXXXXXX", objectFiltrirano)
    setGeoData2(objectFiltrirano)
    console.log("test value")
    // console.log("geodatafićrs", geoData.features)
  }, [geoData, value2])

  useEffect(() => {
    // console.log("geodata2 DDDDDDDDDDDD", geoData2)
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/lovreperaic/ckmq9we780wql17njcxr5mpqk",
      center: [lng, lat],
      pitch: 40,
      zoom: zoom,
    })
    const popup = new mapboxgl.Popup({
      closeButton: true,
      anchor: "center",
      className: "moj-popupMapbox",
      maxWidth: "100%",
      // offset: size < 750 ? [-170, 0] : [-80, 0],
    })

    popup.on("open", function () {
      setPopupOn(true)
      console.log("open")
    })
    popup.on("close", function () {
      setPopupOn(false)
      console.log("closed")
    })

    // console.log(map)
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(2))
    })
    // var nav = new mapboxgl.NavigationControl();
    // map.addControl(nav, 'top-left');

    // map.addControl(
    //   new mapboxgl.NavigationControl({
    //     visualizePitch: true,
    //   }),
    //   "top-left"
    // )
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: "hr",
        zoom: 20,
        marker: {
          color: "#CA8A5D",
        },
        placeholder:
          lang === "hr" ? "Unesi mjesto u Dalmaciji" : "Dalmatian location",
        mapboxgl: mapboxgl,
      }),
      "top-right"
    )

    map.on("load", function () {
      map.loadImage(camera1, function (error, image) {
        if (error) throw error
        map.addImage("cat", image)

        map.addSource("cities", {
          type: "geojson",
          data: geoData2,
          cluster: true,
          clusterMaxZoom: 11, // Max zoom to cluster points on
          clusterRadius: 42, // Radius of each cluster when clustering points (defaults to 50)
          clusterMinPoints: 2,
        })

        // geoData2.features.forEach(point => {
        //   new mapboxgl.Marker().setLngLat(point.geometry.coordinates).addTo(map)
        // })

        //DODAVANJE POSTCARD IKONA:

        map.addLayer({
          id: "city",
          source: "cities",
          type: "symbol",
          layout: {
            "icon-image": "cat",
            "icon-size": 0.26,
            "icon-padding": 0,
            "icon-allow-overlap": true,
            // 'icon-halo-blur': 0.5,
          },
        })
        map.addLayer({
          id: "clusters",
          type: "circle",
          source: "cities",
          filter: ["has", "point_count"],
          paint: {
            // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            "circle-color": [
              "step",
              ["get", "point_count"],
              "#664F3E",
              80,
              "#996f51",
              750,
              "#b1886c",
            ],
            "circle-radius": [
              "step",
              ["get", "point_count"],
              20,
              80,
              30,
              750,
              40,
            ],
          },
        })
        map.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "cities",
          filter: ["has", "point_count"],
          layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            "text-size": 12,
          },
          paint: {
            "text-color": "#e6d2a9",
          },
        })

        map.on("click", "clusters", function (e) {
          var features = map.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
          })
          var clusterId = features[0].properties.cluster_id
          map
            .getSource("cities")
            .getClusterExpansionZoom(clusterId, function (err, zoom) {
              if (err) return

              map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom,
              })
            })
        })

        map.on("mouseenter", "clusters", function () {
          map.getCanvas().style.cursor = "pointer"
        })
        map.on("mouseleave", "clusters", function () {
          map.getCanvas().style.cursor = ""
        })
        // console.log('map:', map);

        map.on("render", function () {
          var features = map.queryRenderedFeatures({ layers: ["city"] })
          // console.log('features', features);

          setFeaturesArr(features)
          // console.log("features", features)
        })

        map.on("click", "city", function (e) {
          // Change the cursor style as a UI indicator.
          // map.getCanvas().style.cursor = ""
          // Populate the popup and set its coordinates based on the feature.
          var coordinates = e.features[0].geometry.coordinates.slice()
          console.log("koordinate", coordinates)
          var feature = e.features[0]
          setShow(false)
          // console.log(feature)
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }
          // console.log("feature", feature.properties.city)
          if (feature.properties.title_naslov !== undefined) {
            popup
              .setLngLat(feature.geometry.coordinates)
              .setText(feature.properties.title_naslov)
              .setHTML(
                `<div class='wrapPopup'>
                  <div class='popupTitle'>
                    <span style="font-weight: bold">${feature.properties.title_naslov},</span>
                     ${feature.properties.datum_uploada}.
                  </div>
                  
                  <div class="imgTest"><img src=${feature.properties.image_url} ></img></div>
                </div>   
                
                `
              )

              .addTo(map)
          }
        })

        map.on("mouseleave", "city", function () {
          map.getCanvas().style.cursor = ""
          // popup.remove()
        })
        map.on("mouseenter", "city", function () {
          map.getCanvas().style.cursor = "pointer"
          // popup.remove();
        })

        map.flyTo({
          // These options control the ending camera position: centered at
          // the target, at zoom level 9, and north up.
          center: [lng, lat],
          zoom: size.width < 750 ? 5.9 : 7.2,
          bearing: 0,

          // These options control the flight curve, making it move
          // slowly and zoom out almost completely before starting
          // to pan.
          speed: 0.3, // make the flying slow
          curve: 1, // change the speed at which it zooms out

          // This can be any easing function: it takes a number between
          // 0 and 1 and returns another number between 0 and 1.
          easing: function (t) {
            return 1 - Math.pow(1 - t, 5)
          },

          // this animation is considered essential with respect to prefers-reduced-motion
          essential: true,
        })
        // Call this function on initialization
        // passing an empty array to render an empty state
        renderListings([])
      })
    })

    // Call this function on initialization
    // passing an empty array to render an empty state
    // renderListings([])

    // Initialize the map

    // map.on("sourcedata", function (e) {
    //   setLoader(e.isSourceLoaded)
    //   // console.log(e)
    // })

    return () => map.remove()
  }, [geoData2, lang])
  // const handleFeatureFilter = (e) => {
  // 	var value = normalize(e.target.value);

  // 	// Filter visible features that don't match the input value.
  // 	var filtered = airports.filter(function (feature) {
  // 		var name = normalize(feature.properties.name);
  // 		var code = normalize(feature.properties.abbrev);
  // 		return name.indexOf(value) > -1 || code.indexOf(value) > -1;
  // 	});

  // 	// Populate the sidebar with filtered results
  // 	renderListings(filtered);

  // 	// Set the filter to populate features into the layer.
  // 	if (filtered.length) {
  // 		map.setFilter('airport', [
  // 			'match',
  // 			['get', 'abbrev'],
  // 			filtered.map(function (feature) {
  // 				return feature.properties.abbrev;
  // 			}),
  // 			true,
  // 			false,
  // 		]);
  // 	}
  // };

  function renderListings(features) {
    // var empty = document.createElement('p');
    // // Clear any existing listings
    // listingEl.innerHTML = '';
    if (features.length) {
      features.forEach(function (feature) {
        const prop = feature.properties
        // const item = document.createElement('a');
        let itemData = []
        // console.log(prop);
        itemData.href = prop.wikipedia
        itemData.target = "_blank"
        itemData.textContent = prop.name + " (" + prop.abbrev + ")"
        setItem(itemData)
      })
    }
  }

  // function getUniqueFeatures(array, comparatorProperty) {
  //   var existingFeatureKeys = {}
  //   // Because features come from tiled vector data, feature geometries may be split
  //   // or duplicated across tile boundaries and, as a result, features may appear
  //   // multiple times in query results.
  //   var uniqueFeatures = array.filter(function (el) {
  //     if (existingFeatureKeys[el.properties[comparatorProperty]]) {
  //       return false
  //     } else {
  //       existingFeatureKeys[el.properties[comparatorProperty]] = true
  //       return true
  //     }
  //   })

  //   return uniqueFeatures
  // }
  const handleThumbClickClose = item => {
    setShow(prev => !prev)
  }
  const handleThumbClick = item => {
    setShow(prev => !prev)
    setPopupFrame(item)
    // popup.remove()
    // console.log(item);
    // const popup = new mapboxgl.Popup({
    //   closeButton: true,
    //   anchor: "center",
    //   className: "moj-popupMapbox",
    //   maxWidth: "100%",
    //   // offset: size < 750 ? [-170, 0] : [-80, 0],
    // })
    // popup.remove()
  }
  const handleChangeGodinaDelayed = (event, newValue) => {
    setValue2(newValue)
    console.log(newValue)
  }
  const handleChangeGodina = (event, newValue) => {
    setValue(newValue)
  }

  // const handleClick = () => {
  //   setIsOpen(false)
  //   // allowScroll()
  // }
  useEffect(() => {
    featuresArr.map(item =>
      item.properties.title_naslov ? setHasPoints(true) : setHasPoints(false)
    )
  }, [featuresArr])

  useEffect(() => {
    setInnerHeight(window.innerHeight)
  }, [size])
  const ref = useRef()
  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <>
      <SEO
        title="Razglednice na mapi"
        description="Interaktivna mapa sa razglednicama iz Zaboravljene Dalmacije"
      />
      <Header></Header>
      <div className="mapWrapper">
        <InfoBlock isOpen={isOpen} />
        <InfoWrap
          ref={ref}
          onClick={() => {
            setIsOpen(() => !isOpen)
            // blockScroll()
          }}
        >
          <GoInfo />
        </InfoWrap>
        {/* <SliderGodina /> */}
        {/* <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
        <div className="map-overlay">
          <SliderGodina
            handleChangeGodina={handleChangeGodina}
            handleChangeGodinaDelayed={handleChangeGodinaDelayed}
            value={value}
          />
        </div>{" "}
        {hasPoints && zoom > 10.3 ? (
          <div className="slides-wrap">
            {zoom > 10.3
              ? featuresArr.length
                ? featuresArr.map((item, index) =>
                    item.properties.title_naslov ? (
                      <div
                        key={index}
                        // style={{ pointerEvent: "none" }}
                        className={`slides-div ${
                          popupOn ? "active-slides-div" : ""
                        }`}
                        onClick={() => handleThumbClick(item)}
                      >
                        <img src={item.properties.image_url_thumb} alt="" />
                        <div
                          style={{
                            position: "absolute",
                            zIndex: "1",
                            bottom: "5px",
                            left: "0",
                            marginLeft: "15px",
                            marginTop: "0",
                            fontSize: "1.2rem",
                            display: "flex",
                            flexDirection: "row-reverse",
                            textShadow: "2px 2px 2px black",
                            // flexDirection: "column",
                            alignItems: "center",
                            color: "white",
                          }}
                        >
                          {/* <div style={{ fontSize: "10px", fontWeight: "bold" }}>
                            ,{item.properties.title_naslov}
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            {item.properties.datum_uploada}
                          </div> */}
                        </div>
                      </div>
                    ) : null
                  )
                : null
              : null}
          </div>
        ) : (
          <div></div>
        )}
        {/* {!loader && (
          <div className="sidebar2">
            <LoaderSpinner />
          </div>
        )} */}
        <div
          className="map-container"
          style={{ height: `${innerHeight}px` }}
          ref={mapContainer}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {show && (
            <div className="popupFrame">
              <div
                style={{
                  position: "relative",
                  // width: "100%",
                  // height: "100%",
                  top: "-55px",
                  zIndex: "2",
                }}
              >
                <div className="popupFrameDataWrap">
                  <div>
                    <b>{popupFrame.properties.title_naslov},</b>
                    &nbsp;{popupFrame.properties.datum_uploada}
                  </div>
                  <div onClick={handleThumbClickClose} className="x">
                    X
                  </div>
                </div>{" "}
                <img src={popupFrame.properties.image_url} alt="postcard" />
              </div>
            </div>
          )}
        </div>
      </div>{" "}
    </>
  )
}

export default Razglednice

// export const query = graphql`
//   query($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `
