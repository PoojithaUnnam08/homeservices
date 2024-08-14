import React, { useState } from 'react';


// Importing product images
import electricWheelChairImage from '../assests/images/electric wheel chair.jpg';
import hospitalCotImage from '../assests/images/hospital cot.jpg';
import wheelChairImage from '../assests/images/wheel chair.jpg';
import walkerImage from '../assests/images/walker.jpg';
import glucometerImage from '../assests/images/glucometer.jpg';
import glucometerStripsImage from '../assests/images/glucometer strips.jpg';
import bpMachineImage from '../assests/images/bp machine.jpg';
import himalayagentlewipes from '../assests/images/himalayagentlewipes.jpg';
import babycare from '../assests/images/babycare.jpg';
import metalwalker from '../assests/images/metalwalker.jpg';
import stainlesssteelwalker from '../assests/images/stainlesssteelwalker.jpg';
import drorthobacksupportbelt from '../assests/images/drorthobacksupportbelt.jpg';
import anklesupport from '../assests/images/anklesupport.jpg';
import armwrist from '../assests/images/armwrist.jpg';
import wristbrace from '../assests/images/wristbrace.jpg';
import wristsplint from '../assests/images/wristsplint.jpg';
import wheelChair from '../assests/images/wheelChair.jpg';


const products = [
    { id: 1, name: 'Electric Wheel Chair', price: '42,000', image: electricWheelChairImage, category: 'Wheelchairs' },
    { id: 2, name: 'Hospital Cot', price: '15,999', image: hospitalCotImage, category: 'Cots' },
    { id: 3, name: 'Wheel Chair', price: '4,500', image: wheelChairImage, category: 'Wheelchairs' },
    { id: 4, name: 'Walker', price: ',1,900', image: walkerImage, category: 'Walkers' },
    { id: 5, name: 'Accu Check Glucometer', price: ',1,836', image: glucometerImage, category: 'Glucometers' },
    { id: 6, name: 'Glucometer Strips', price: '700', image: glucometerStripsImage, category: 'Glucometers' },
    { id: 7, name: 'Blood Pressure Machine', price: '1,850', image: bpMachineImage, category: 'Blood Pressure' },
    { id: 8, name: 'Himalaya Gentle Wipes', price: '170', image: himalayagentlewipes, category: 'Wipes' },
    { id: 9, name: 'BabyCare', price: '400', image: babycare, category: 'Baby Care' },
    { id: 10, name: 'Metal Walker', price: '2,500', image: metalwalker, category: 'Walkers' },
    { id: 11, name: 'Stainless Steel Walker', price: '1,500', image: stainlesssteelwalker, category: 'Walkers' },
    { id: 12, name: 'Dr Ortho BackSupport Belt', price: '499', image: drorthobacksupportbelt, category: 'Support Belts' },
    { id: 13, name: 'Ankle Support', price: '399', image: anklesupport, category: 'Support Belts' },
    { id: 14, name: 'Arm Wrist', price: '229', image: armwrist, category: 'Support Belts' },
    { id: 15, name: 'Wrist Brace', price: '399', image: wristbrace, category: 'Support Belts' },
    { id: 16, name: 'Wrist Splint', price: '328', image: wristsplint, category: 'Support Belts' },
    { id: 17, name: 'wheelChair', price: '4,000', image: wheelChair, category: 'Wheelchairs' },
];

export default products;