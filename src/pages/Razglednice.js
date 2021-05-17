import React, { useState, useEffect, useRef } from "react"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
import { graphql, withAssetPrefix } from "gatsby"
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp"
// import Geocoder from "react-mapbox-gl-geocoder"
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import Layout from "../components/layout"
import styled from "styled-components"
import { CgMenuGridR } from "react-icons/cg"
import firebase from "gatsby-plugin-firebase"

import "mapbox-gl/dist/mapbox-gl.css"
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import Flickr from "flickr-sdk"
import flag from "../../content/assets/flag.png"
import { withTheme } from "styled-components"
import SliderGodina from "../components/SliderGodina"
import { useWindowSize } from "../components/useWindowSize"
import { parse } from "postcss"
import LoaderSpinner from "./../components/LoaderSpinner"
import MeniMobile from "../components/meniMobile"
import GooglePhotos from "../components/testGooglePhotosApi"
import FirebaseData from "../components/testGooglePhotosApi"
mapboxgl.workerClass = MapboxWorker
mapboxgl.accessToken =
  "pk.eyJ1IjoibG92cmVwZXJhaWMiLCJhIjoiY2p1bDFnN29jMjJqbjN5cGcxbnp2d2ZtMSJ9.nooF3ezg5yH_NBrmGjKQUw"

const Hamburger = styled.div`
  cursor: pointer;
  color: black;
  position: relative;
  top: 2px;
  z-index: 1000;
  margin-right: 30px;
  /* display: none; */

  @media screen and (min-width: 750px) {
    display: none;
  }
`

function Razglednice({ data }) {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  const size = useWindowSize()
  const mapContainer = useRef()
  const [value, setValue] = useState([1889, 1970])
  const [value2, setValue2] = useState([1890, 1970])
  const [YearFilteredFeaturedArr, setYearFilteredFeaturedArr] = useState([])
  const [lng, setLng] = useState(16.7469)
  const [lat, setLat] = useState(42.7781)
  const [zoom, setZoom] = useState(6.26)
  const [pages, setPages] = useState()
  const [airports, setAirports] = useState([])
  const [array, setArray] = useState([])
  const [item, setItem] = useState([])
  const [loader, setLoader] = useState(false)
  const [featuresArr, setFeaturesArr] = useState([])
  const [show, setShow] = useState(false)
  const [popupFrame, setPopupFrame] = useState(null)
  const [flickr, setFlickr] = useState([])
  const [geoData, setGeoData] = useState([])
  const [geoData2, setGeoData2] = useState([])
  const [FlickrDataTest, setFlickrDataTest] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [slike, setSlike] = useState([])
  const [listData, setListData] = useState([])

  var flickrs = new Flickr("fd4a1bda8ebe5a6c92d2e206c9df0e16")

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
      .doc("wAAHSiuZbg5A6dZ6DmuA")
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
      // offset: size < 750 ? [-170, 0] : [-80, 0],
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
        placeholder: "Unesi mjesto u Dalmaciji",
        mapboxgl: mapboxgl,
      }),
      "top-right"
    )

    map.on("load", function () {
      map.loadImage(flag, function (error, image) {
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
            "icon-size": 0.7,
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
          map.getCanvas().style.cursor = "pointer"
          // Populate the popup and set its coordinates based on the feature.
          var coordinates = e.features[0].geometry.coordinates.slice()
          console.log("koordinate", coordinates)
          var feature = e.features[0]
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
                  <div class='popupImageWrap' style="background-image: url(${feature.properties.image_url}); 
                background-repeat: no-repeat; background-size: contain; filter: drop-shadow(0 0 4rem rgba(104, 62, 15, 0.61)); 
                background-position: center">
                  </div>
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

        // Call this function on initialization
        // passing an empty array to render an empty state
        renderListings([])
      })
    })

    // Call this function on initialization
    // passing an empty array to render an empty state
    // renderListings([])

    // Initialize the map

    map.on("sourcedata", function (e) {
      setLoader(e.isSourceLoaded)
      // console.log(e)
    })

    return () => map.remove()
  }, [geoData2])
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

  function getUniqueFeatures(array, comparatorProperty) {
    var existingFeatureKeys = {}
    // Because features come from tiled vector data, feature geometries may be split
    // or duplicated across tile boundaries and, as a result, features may appear
    // multiple times in query results.
    var uniqueFeatures = array.filter(function (el) {
      if (existingFeatureKeys[el.properties[comparatorProperty]]) {
        return false
      } else {
        existingFeatureKeys[el.properties[comparatorProperty]] = true
        return true
      }
    })

    return uniqueFeatures
  }
  const handleThumbClick = item => {
    setShow(prev => !prev)
    setPopupFrame(item)
    // console.log(item);
  }

  const handleChangeGodinaDelayed = (event, newValue) => {
    setValue2(newValue)
    console.log(newValue)
  }
  const handleChangeGodina = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = () => {
    setIsOpen(false)
    // allowScroll()
  }

  return (
    <Layout>
      {" "}
      <MeniMobile handleClick={handleClick} isOpen={isOpen} />
      <Hamburger
        onClick={() => {
          setIsOpen(() => !isOpen)
          // blockScroll()
        }}
      >
        <CgMenuGridR
          style={{
            color: "#534227",
            width: "28px",
            height: "28px",
            position: "absolute",
            top: "15px",
            left: "10px",
            zIndex: "11",
          }}
        />
      </Hamburger>{" "}
      <div className="mapWrapper">
        {/* <SliderGodina /> */}
        {/* <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
        <div className="slides-wrap">
          {zoom > 11.3
            ? featuresArr.length
              ? featuresArr.map((item, index) =>
                  item.properties.title_naslov !== undefined ? (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        // flexDirection: "column-reverse",
                        alignItems: "center",
                        justifyContent: "end",
                        cursor: "pointer",
                        width: "150px",
                        minWidth: "150px",
                        // backgroundColor: "#d6ccba",
                        margin: "5px",
                        borderRadius: "7px",
                        backgroundImage: `url(${item.properties.image_url_thumb})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        // filter: "drop-shadow(0 0 4rem rgba(104, 62, 15, 0.61))",
                      }}
                      onClick={() => handleThumbClick(item)}
                    >
                      {/* <img
                        // width="70"
                        src={item.properties.image_url_thumb}
                        alt=""
                      /> */}
                      <div
                        style={{
                          marginLeft: "10px",
                          marginTop: "50px",
                          fontSize: "1.2rem",
                          display: "flex",
                          textShadow: "2px 2px 2px black",
                          // flexDirection: "column",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        <div style={{ fontSize: "10px", fontWeight: "bold" }}>
                          {item.properties.title_naslov},
                        </div>
                        <div style={{ fontSize: "10px" }}>
                          {item.properties.datum_uploada}
                        </div>
                      </div>
                    </div>
                  ) : null
                )
              : null
            : null}
        </div>
        {!loader && (
          <div className="sidebar2">
            <LoaderSpinner />
          </div>
        )}
        <div className="map-container" ref={mapContainer} />
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
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem,",
                    fontWeight: "600",
                    marginLeft: "30px",
                    padding: "10px 20px",
                    backgroundColor: "wheat",
                    fontSize: "1rem",
                    color: " #614d29",
                    margin: "0.3rem auto 0 0.5rem",
                    width: "auto",
                  }}
                >
                  {popupFrame.properties.title_naslov}
                </span>
              </div>
              <div onClick={handleThumbClick} className="x">
                X
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${popupFrame.properties.image_url})`,
                  top: "0",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain ",
                  zIndex: "2",
                  // filter: "drop-shadow(0 0 4rem rgba(104, 62, 15, 0.61))",
                }}
              ></div>
            </div>
          )}
        </div>
        <div className="map-overlay">
          <SliderGodina
            handleChangeGodina={handleChangeGodina}
            handleChangeGodinaDelayed={handleChangeGodinaDelayed}
            value={value}
          />{" "}
        </div>{" "}
        {/* {flickr.length !== 0
    ? flickr.photos.photo.map((photo) => console.log(photo))
    : console.log('jure')} */}
        {/* {console.log(flickr)} */}
      </div>{" "}
      {/* <GooglePhotos /> */}
      {/* <FirebaseData /> */}
    </Layout>
  )
}

export default Razglednice

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
