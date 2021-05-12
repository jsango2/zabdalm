import React, { useState, useEffect, useRef } from "react"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
import { graphql, withAssetPrefix } from "gatsby"
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp"
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import Layout from "../components/layout"
import "mapbox-gl/dist/mapbox-gl.css"
import Flickr from "flickr-sdk"
import flag from "../../content/assets/flag.png"
import { withTheme } from "styled-components"
import SliderGodina from "../components/SliderGodina"
import { parse } from "postcss"
mapboxgl.workerClass = MapboxWorker
mapboxgl.accessToken =
  "pk.eyJ1IjoibG92cmVwZXJhaWMiLCJhIjoiY2p1bDFnN29jMjJqbjN5cGcxbnp2d2ZtMSJ9.nooF3ezg5yH_NBrmGjKQUw"

function Razglednice() {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()

  const mapContainer = useRef()
  const [value, setValue] = useState([1889, 1970])
  const [value2, setValue2] = useState([])
  const [YearFilteredFeaturedArr, setYearFilteredFeaturedArr] = useState([])
  const [lng, setLng] = useState(16.25)
  const [lat, setLat] = useState(43.81)
  const [zoom, setZoom] = useState(6.91)
  const [pages, setPages] = useState()
  const [airports, setAirports] = useState([])
  const [array, setArray] = useState([])
  const [item, setItem] = useState([])
  const [featuresArr, setFeaturesArr] = useState([])
  const [show, setShow] = useState(false)
  const [popupFrame, setPopupFrame] = useState(null)
  const [flickr, setFlickr] = useState([])
  const [geoData, setGeoData] = useState([])
  const [geoData2, setGeoData2] = useState([])
  const [FlickrDataTest, setFlickrDataTest] = useState([])
  var flickrs = new Flickr("64bbf82a0438ce5f4e21bf7286def00b")
  useEffect(() => {
    flickrs.galleries
      .getPhotos({
        gallery_id: "72157718768762512",
        extras: [
          "description",
          "geo",
          "tags",
          "url_m",
          "title",
          "date_upload",
          "machine_tags",
        ],
        per_page: 500,
      })
      .then(function (res) {
        // setFlickr(res.body);
        setPages(res.body.photos.pages)
      })
      .catch(function (err) {
        console.error("bonk", err)
      })
  }, [])

  // useEffect(() => {
  //   fetch(
  //     "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=a89feeb9b87040fa489bf851c810f121&gallery_id=72157718730942627&extras=description%2C+geo%2C+tags%2C+url_c%2Ctitle%2C+date_upload%2C+machine_tags%2C&per_page=500&page=1&format=json&nojsoncallback=1&auth_token=72157719145080653-a05d7fb32349048e&api_sig=b561e26a0c426c700ce275ee04627c4b"
  //   )
  //     .then(res => res.json())
  //     .then(data => setFlickr(data.photos.photo))
  // }, [])

  useEffect(() => {
    if (pages !== undefined) {
      // console.log("pages:", pages)
      let arrayFlickr = []
      for (let index = 1; index <= pages; index++) {
        // console.log("index", index)
        flickrs.people
          .getPublicPhotos({
            user_id: "192971463@N03",
            extras: [
              "description",
              "geo",
              "tags",
              "url_t",
              "url_c",
              "title",
              "date_taken",
              "machine_tags",
            ],
            per_page: 500,
            page: index,
          })
          .then(function (res) {
            // console.log("res:", res)
            arrayFlickr.push(res.body.photos.photo)
            setFlickr(arrayFlickr.flat())
          })
          .catch(function (err) {
            console.error("bonk", err)
          })
      }
    }
  }, [pages])
  // console.log('izlaz:::::', array);

  useEffect(() => {
    // console.log("flickr", flickr)
    if (flickr.length !== 0 || flickr.length !== undefined) {
      const geoJsonedFlickr = {
        type: "FeatureCollection",
        features: flickr.map(photo => ({
          type: "Feature",
          properties: {
            title_naslov: photo.title,
            image_url_thumb: photo.url_t,
            image_url: photo.url_c,
            description: photo.description,
            tags: photo.tags,
            datum_uploada: parseInt(photo.datetaken.substring(0, 4)),
            machine_tags: photo.machine_tags,
            coordinates: [photo.longitude, photo.latitude],
            icon: {
              iconUrl: photo.url_c,
              iconSize: [50, 50], // size of the icon
              iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
              className: "dot",
            },
          },
          geometry: {
            type: "Point",
            coordinates: [photo.longitude, photo.latitude],
          },
        })),
      }
      // console.log("geoed:", geoJsonedFlickr.features)

      setGeoData(geoJsonedFlickr)
      // console.log(
      //   "filter 1908-1910:",
      //   geoJsonedFlickr.features.filter(
      //     razglednica =>
      //       razglednica.properties.datum_uploada >= value[0] &&
      //       razglednica.properties.datum_uploada <= value[1]
      //   )
      // )
      // setGeoData(
      //   geoJsonedFlickr.features.filter(
      //     razglednica =>
      //       razglednica.properties.datum_uploada >= 1900 &&
      //       razglednica.properties.datum_uploada <= 1910
      //   )
      // )
      // setYearFilteredFeaturedArr(geoJsonedFlickr)
    }
  }, [flickr])

  useEffect(() => {
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
    // console.log("geodatafićrs", geoData.features)
  }, [geoData, value2])

  useEffect(() => {
    // console.log("geodata2 DDDDDDDDDDDD", geoData2)
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/lovreperaic/ckmq9we780wql17njcxr5mpqk",
      center: [lng, lat],
      zoom: zoom,
    })
    const popup = new mapboxgl.Popup({
      closeButton: true,
    })

    // console.log(map)
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(2))
    })
    // var nav = new mapboxgl.NavigationControl();
    // map.addControl(nav, 'top-left');

    map.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      "top-left"
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
          clusterRadius: 10, // Radius of each cluster when clustering points (defaults to 50)
          clusterMinPoints: 2,
        })

        // geoData.features.forEach((point) => {
        // 	new mapboxgl.Marker()
        // 		.setLngLat(point.geometry.coordinates)
        // 		.addTo(map);
        // });

        //DODAVANJE POSTCARD IKONA:

        map.addLayer({
          id: "city",
          source: "cities",
          type: "symbol",
          layout: {
            "icon-image": "cat",
            "icon-size": 0.011,
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
              100,
              "#f1f075",
              750,
              "#f28cb1",
            ],
            "circle-radius": [
              "step",
              ["get", "point_count"],
              20,
              100,
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

        map.on("mouseover", "city", function (e) {
          // Change the cursor style as a UI indicator.
          map.getCanvas().style.cursor = "pointer"
          // Populate the popup and set its coordinates based on the feature.
          var coordinates = e.features[0].geometry.coordinates.slice()

          var feature = e.features[0]
          // console.log(feature)
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }
          // console.log("feature", feature.properties.city)
          if (feature.properties.city !== undefined) {
            popup
              .setLngLat(feature.geometry.coordinates)
              .setText(feature.properties.city)
              .setHTML(
                `<div class='popupTitle'>${feature.properties.city}, 1929.</div>
                                    <img src=${feature.properties.image} width='300px'></img>`
              )
              .addTo(map)
          }
        })

        map.on("mouseleave", "city", function () {
          map.getCanvas().style.cursor = ""
          popup.remove()
        })
        map.on("mousemove", "city", function () {
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
    renderListings([])
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

  const handleChangeGodina = (event, newValue) => {
    setValue(newValue)
    setTimeout(() => {
      setValue2(newValue)
      console.log(newValue)
    }, 1000)
  }

  // useEffect(() => {
  //   setYearFilteredFeaturedArr(
  //     featuresArr.filter(
  //       razglednica =>
  //         razglednica.properties.datum_uploada >= value[0] &&
  //         razglednica.properties.datum_uploada <= value[1]
  //     )
  //   )
  //   console.log("filterirana array", YearFilteredFeaturedArr)
  // }, [value])

  return (
    <Layout>
      {" "}
      <div className="mapWrapper">
        {/* <SliderGodina /> */}
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
                Grad:{" "}
                <span style={{ fontSize: "1.2re,", fontWeight: "600" }}>
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
                }}
              ></div>
            </div>
          )}
        </div>
        <div className="map-overlay">
          <div id="feature-listing" className="listing">
            {/* {console.log("podaci za render", featuresArr)} */}
            {zoom > 7.5
              ? featuresArr.length
                ? featuresArr.map((item, index) =>
                    item.properties.title_naslov !== undefined ? (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          backgroundColor: "white",
                          margin: "5px",
                          borderRadius: "7px",
                        }}
                        onClick={() => handleThumbClick(item)}
                      >
                        {/* {console.log(item.properties.image_url)} */}
                        <img
                          width="100"
                          height="70"
                          src={item.properties.image_url_thumb}
                          alt=""
                        />
                        <div style={{ marginLeft: "10px", fontSize: "1.2rem" }}>
                          <h5>{item.properties.title_naslov}</h5>
                          <h5>{item.properties.datum_uploada}</h5>
                        </div>
                      </div>
                    ) : null
                  )
                : null
              : null}

            {/* {console.log(features)} */}
          </div>
        </div>{" "}
        <SliderGodina handleChangeGodina={handleChangeGodina} value={value} />
        {/* {flickr.length !== 0
    ? flickr.photos.photo.map((photo) => console.log(photo))
    : console.log('jure')} */}
        {/* {console.log(flickr)} */}
      </div>
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
