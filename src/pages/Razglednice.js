import React, { useState, useEffect, useRef } from "react"
import "../../i18next"
import { useTranslation } from "react-i18next"
import { GoInfo } from "react-icons/go"
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp"
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import styled from "styled-components"
import firebase from "gatsby-plugin-firebase"
import { Link } from "gatsby"
import "mapbox-gl/dist/mapbox-gl.css"
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import camera1 from "../../content/assets/camera1.png"
import SliderGodina from "../components/SliderGodina"
import { useWindowSize } from "../components/useWindowSize"
import Header from "./../components/header"
import i18next from "i18next"
import SEO from "../components/seo"
import Lottie from "lottie-react"
import animation1152Hr from "../animations/popoutrazglednice/popoutrazgledniceHr"
import InfoBlock from "../components/InfoBlock"
import { useOnClickOutside } from "../components/useClickOutside"
import animation1152En from "../animations/popoutrazglednice/poputrazgledniceEn"
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default
// mapboxgl.workerClass = MapboxWorker
mapboxgl.accessToken = process.env.GATSBY_MAPBOX_TOKEN

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

  @media screen and (max-width: 630px) {
    right: 26px;
    top: 102px;
    left: unset;
  }
`
const PopupAnimacija = styled.div`
  position: absolute;
  left: 36px;
  top: 20px;
  z-index: 11;
  color: #4e370c;
  font-size: 12px;
  line-height: 16px;

  @media screen and (max-width: 630px) {
    width: 80%;
    left: 16px;
    top: 95px;
  }
`
const KupiPosterWrap = styled.div`
  position: absolute;

  background-color: #ffffffac;
  display: flex;
  border-radius: 5px;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  left: 26px;
  top: 25px;
  z-index: 2;
  color: #4e370c;
  font-size: 12px;
  line-height: 16px;

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
  const [popupPoster, setPopupPoster] = useState(false)
  const [brojac, setBrojac] = useState(true)

  const [geoData, setGeoData] = useState([])
  const [geoData2, setGeoData2] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const [lang, setLang] = useState(i18next.language)

  const interactivity = {
    mode: "cursor",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 153],
      },
    ],
  }

  useEffect(() => {
    setLang(i18next.language)
  }, [i18next.language])

  useEffect(() => {
    var docRef = firebase
      .firestore()
      .collection("razglednice")
      .doc(process.env.GATSBY_MAPBOX)
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
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

    setGeoData2(objectFiltrirano)
  }, [geoData, value2])

  useEffect(() => {
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
    })

    popup.on("open", function () {
      setPopupOn(true)
    })
    popup.on("close", function () {
      setPopupOn(false)
    })

    // console.log(map)
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(2))
    })

    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     countries: "hr",
    //     zoom: 20,
    //     marker: {
    //       color: "#CA8A5D",
    //     },
    //     placeholder:
    //       lang === "hr" ? "Unesi mjesto u Dalmaciji" : "Dalmatian location",
    //     mapboxgl: mapboxgl,
    //   }),
    //   "top-right"
    // )

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
        map.on("idle", function () {
          setPopupPoster(true)
        })
        map.on("mouseenter", "clusters", function () {
          map.getCanvas().style.cursor = "pointer"
        })
        map.on("mouseleave", "clusters", function () {
          map.getCanvas().style.cursor = ""
        })

        map.on("render", function () {
          var features = map.queryRenderedFeatures({ layers: ["city"] })

          setFeaturesArr(features)
        })

        map.on("click", "city", function (e) {
          // Change the cursor style as a UI indicator.
          // map.getCanvas().style.cursor = ""
          // Populate the popup and set its coordinates based on the feature.
          var coordinates = e.features[0].geometry.coordinates.slice()
          var feature = e.features[0]
          setShow(false)
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }
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

  function renderListings(features) {
    // var empty = document.createElement('p');
    // // Clear any existing listings
    // listingEl.innerHTML = '';
    if (features.length) {
      features.forEach(function (feature) {
        const prop = feature.properties
        let itemData = []
        itemData.href = prop.wikipedia
        itemData.target = "_blank"
        itemData.textContent = prop.name + " (" + prop.abbrev + ")"
        setItem(itemData)
      })
    }
  }

  const handleThumbClickClose = item => {
    setShow(prev => !prev)
  }
  const handleThumbClick = item => {
    setShow(prev => !prev)
    setPopupFrame(item)
  }
  const handleChangeGodinaDelayed = (event, newValue) => {
    setValue2(newValue)
  }
  const handleChangeGodina = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (popupPoster === true) {
      setTimeout(function () {
        setPopupPoster(false)
        setBrojac(false)
      }, 10000)
    }
  }, [popupPoster])

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
        {lang === "hr"
          ? popupPoster &&
            brojac && (
              <Link to="/Kontakt">
                <PopupAnimacija>
                  <Lottie animationData={animation1152Hr} loop={false} />
                </PopupAnimacija>
              </Link>
            )
          : popupPoster &&
            brojac && (
              <Link to="/Kontakt">
                <PopupAnimacija>
                  <Lottie animationData={animation1152En} loop={false} />
                </PopupAnimacija>
              </Link>
            )}
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
                            alignItems: "center",
                            color: "white",
                          }}
                        ></div>
                      </div>
                    ) : null
                  )
                : null
              : null}
          </div>
        ) : (
          <div></div>
        )}
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
