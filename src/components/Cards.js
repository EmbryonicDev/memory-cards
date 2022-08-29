import apple from "../assets/icons/apple.svg"
import bitcoin from "../assets/icons/bitcoin.svg"
import brush from "../assets/icons/brush.svg"
import bus from "../assets/icons/bus.svg"
import camera from "../assets/icons/camera.svg"
import car from "../assets/icons/car.svg"
import crow from "../assets/icons/crow.svg"
import dragon from "../assets/icons/dragon.svg"
import feather from "../assets/icons/feather.svg"
import fire from "../assets/icons/fire.svg"
import hammer from "../assets/icons/hammer.svg"
import hiker from "../assets/icons/hiker.svg"
import hippo from "../assets/icons/hippo.svg"
import horse from "../assets/icons/horse.svg"
import igloo from "../assets/icons/igloo.svg"
import meteor from "../assets/icons/meteor.svg"
import moon from "../assets/icons/moon.svg"
import motorbike from "../assets/icons/motorbike.svg"
import robot from "../assets/icons/robot.svg"
import shuttle from "../assets/icons/shuttle.svg"
import snowman from "../assets/icons/snowman.svg"
import tent from "../assets/icons/tent.svg"
import gun from "../assets/icons/gun.svg"
import worm from "../assets/icons/worm.svg"
import { useState } from "react"

export default function Cards() {

  function toTitleCase(arr) {
    return arr.map(obj => obj.charAt(0).toUpperCase() + obj.substr(1))
  }

  const cardObjects = () => {
    // Below 2 x arrays must match
    const cardsIcons = [apple, bitcoin, brush, bus, camera, car, crow, dragon, feather, fire, hammer, hiker, hippo, horse, igloo, meteor, moon, motorbike, robot, shuttle, snowman, tent, gun, worm];
    const draftCardTextArr = ['apple', 'bitcoin', 'brush', 'bus', 'camera', 'car', 'crow', 'dragon', 'feather', 'fire', 'hammer', 'hiker', 'hippo', 'horse', 'igloo', 'meteor', 'moon', 'motorbike', 'robot', 'shuttle', 'snowman', 'tent', 'gun', 'worm'];
    const cardTextArr = toTitleCase(draftCardTextArr);
    const arr = [];

    for (let i = 0; i < cardsIcons.length; i++) {
      const obj = {
        icon: cardsIcons[i],
        text: cardTextArr[i],
        selected: false
      };
      arr.push(obj);
    }
    return arr;
  }

  return (
    console.log(cardObjects())
  )
}




