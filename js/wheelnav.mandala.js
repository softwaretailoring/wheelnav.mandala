/* ==============================================================================================  */
/*                                   wheelnav.datetime.js - v0.9.0                                 */
/* ==============================================================================================  */
/* This is a small javascript library for wheel based mandalas.                                    */
/* Requires wheelnav.js library (http://wheelnavjs.softwaretailoring.net)                          */
/* ==============================================================================================  */
/* Check http://wheelnavjs.softwaretailoring.net/mandala for samples.                              */
/* Fork https://github.com/softwaretailoring/wheelnav.mandala for contribution.                    */
/* =============================================================================================== */
/* Copyright © 2015 Gábor Berkesi (http://softwaretailoring.net)                                   */
/* Licensed under MIT (https://github.com/softwaretailoring/wheelnav.mandala/blob/master/LICENSE)  */
/* =============================================================================================== */

var mandalaPath = function () {

    this.startAngle = 0;
    this.startTheta = 0;
    this.middleTheta = 0;
    this.endTheta = 0;
    this.titlePosX = 0;
    this.titlePosY = 0;
    this.titleRadius = 0;
    this.r = 0;

    var setBaseValue = function (helper, percent, custom) {

        this.x = helper.centerX;
        this.y = helper.centerY;
        this.rOriginal = helper.wheelRadius;
        this.startAngle = helper.startAngle;
        this.sliceAngle = helper.sliceAngle;
        this.itemIndex = helper.itemIndex;
        this.r = rOriginal * percent;
        this.startTheta = getTheta(startAngle);
        this.middleTheta = getTheta(startAngle + sliceAngle / 2);
        this.endTheta = getTheta(startAngle + sliceAngle);
        this.titleRadius = r * 0.5;
        setTitlePos(x, y);

        this.theta0625 = getTheta(startAngle + sliceAngle * 0.0625);
        this.theta125 = getTheta(startAngle + sliceAngle * 0.125);
        this.theta1875 = getTheta(startAngle + sliceAngle * 0.1875);
        this.theta25 = getTheta(startAngle + sliceAngle * 0.25);
        this.theta3125 = getTheta(startAngle + sliceAngle * 0.3125);
        this.theta375 = getTheta(startAngle + sliceAngle * 0.375);
        this.theta4375 = getTheta(startAngle + sliceAngle * 0.4375);
        this.theta5 = getTheta(startAngle + sliceAngle * 0.5);
        this.theta5625 = getTheta(startAngle + sliceAngle * 0.5625);
        this.theta625 = getTheta(startAngle + sliceAngle * 0.625);
        this.theta6875 = getTheta(startAngle + sliceAngle * 0.6875);
        this.theta75 = getTheta(startAngle + sliceAngle * 0.75);
        this.theta8125 = getTheta(startAngle + sliceAngle * 0.8125);
        this.theta875 = getTheta(startAngle + sliceAngle * 0.875);
        this.theta9375 = getTheta(startAngle + sliceAngle * 0.9375);
        this.theta96875 = getTheta(startAngle + sliceAngle * 0.96875);
    }

    var setTitlePos = function (x, y) {
        this.titlePosX = titleRadius * Math.cos(middleTheta) + x;
        this.titlePosY = titleRadius * Math.sin(middleTheta) + y;
    }

    var getTheta = function (angle) {
        return (angle % 360) * Math.PI / 180;
    }

    this.CoordSlice = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);

        slicePathString = [["M", x, y],
             ["L", r * 0.1 * Math.cos(startTheta) + x, r * 0.1 * Math.sin(startTheta) + y],
             ["L", r * 1 * Math.cos(endTheta) + x, r * 1 * Math.sin(endTheta) + y],
             ["L", r * 0.9 * Math.cos(endTheta) + x, r * 0.9 * Math.sin(endTheta) + y],
             ["L", r * 0.2 * Math.cos(startTheta) + x, r * 0.2 * Math.sin(startTheta) + y],
             ["L", r * 0.3 * Math.cos(startTheta) + x, r * 0.3 * Math.sin(startTheta) + y],
             ["L", r * 0.8 * Math.cos(endTheta) + x, r * 0.8 * Math.sin(endTheta) + y],
             ["L", r * 0.7 * Math.cos(endTheta) + x, r * 0.7 * Math.sin(endTheta) + y],
             ["L", r * 0.4 * Math.cos(startTheta) + x, r * 0.4 * Math.sin(startTheta) + y],
             ["L", r * 0.5 * Math.cos(startTheta) + x, r * 0.5 * Math.sin(startTheta) + y],
             ["L", r * 0.6 * Math.cos(endTheta) + x, r * 0.6 * Math.sin(endTheta) + y],
             ["L", r * 0.5 * Math.cos(endTheta) + x, r * 0.5 * Math.sin(endTheta) + y],
             ["L", r * 0.6 * Math.cos(startTheta) + x, r * 0.6 * Math.sin(startTheta) + y],
             ["L", r * 0.7 * Math.cos(startTheta) + x, r * 0.7 * Math.sin(startTheta) + y],
             ["L", r * 0.4 * Math.cos(endTheta) + x, r * 0.4 * Math.sin(endTheta) + y],
             ["L", r * 0.3 * Math.cos(endTheta) + x, r * 0.3 * Math.sin(endTheta) + y],
             ["L", r * 0.8 * Math.cos(startTheta) + x, r * 0.8 * Math.sin(startTheta) + y],
             ["L", r * 0.9 * Math.cos(startTheta) + x, r * 0.9 * Math.sin(startTheta) + y],
             ["L", r * 0.2 * Math.cos(endTheta) + x, r * 0.2 * Math.sin(endTheta) + y],
             ["L", r * 0.1 * Math.cos(endTheta) + x, r * 0.1 * Math.sin(endTheta) + y],
             ["L", r * 1 * Math.cos(startTheta) + x, r * 1 * Math.sin(startTheta) + y],
             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.CoordSliceSelected = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);

        slicePathString = [["M", x, y],
             ["L", r * 1 * Math.cos(startTheta) + x, r * 1 * Math.sin(startTheta) + y],
             ["L", r * 0.1 * Math.cos(endTheta) + x, r * 0.1 * Math.sin(endTheta) + y],
             ["L", r * 0.2 * Math.cos(endTheta) + x, r * 0.2 * Math.sin(endTheta) + y],
             ["L", r * 0.9 * Math.cos(startTheta) + x, r * 0.9 * Math.sin(startTheta) + y],
             ["L", r * 0.8 * Math.cos(startTheta) + x, r * 0.8 * Math.sin(startTheta) + y],
             ["L", r * 0.3 * Math.cos(endTheta) + x, r * 0.3 * Math.sin(endTheta) + y],
             ["L", r * 0.4 * Math.cos(endTheta) + x, r * 0.4 * Math.sin(endTheta) + y],
             ["L", r * 0.7 * Math.cos(startTheta) + x, r * 0.7 * Math.sin(startTheta) + y],
             ["L", r * 0.6 * Math.cos(startTheta) + x, r * 0.6 * Math.sin(startTheta) + y],
             ["L", r * 0.5 * Math.cos(endTheta) + x, r * 0.5 * Math.sin(endTheta) + y],
             ["L", r * 0.6 * Math.cos(endTheta) + x, r * 0.6 * Math.sin(endTheta) + y],
             ["L", r * 0.5 * Math.cos(startTheta) + x, r * 0.5 * Math.sin(startTheta) + y],
             ["L", r * 0.4 * Math.cos(startTheta) + x, r * 0.4 * Math.sin(startTheta) + y],
             ["L", r * 0.7 * Math.cos(endTheta) + x, r * 0.7 * Math.sin(endTheta) + y],
             ["L", r * 0.8 * Math.cos(endTheta) + x, r * 0.8 * Math.sin(endTheta) + y],
             ["L", r * 0.3 * Math.cos(startTheta) + x, r * 0.3 * Math.sin(startTheta) + y],
             ["L", r * 0.2 * Math.cos(startTheta) + x, r * 0.2 * Math.sin(startTheta) + y],
             ["L", r * 0.9 * Math.cos(endTheta) + x, r * 0.9 * Math.sin(endTheta) + y],
             ["L", r * 1 * Math.cos(endTheta) + x, r * 1 * Math.sin(endTheta) + y],
             ["L", r * 0.1 * Math.cos(startTheta) + x, r * 0.1 * Math.sin(startTheta) + y],
             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.FlowerSlice = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        cr = r;

        slicePathString = [["M", x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(startTheta) + x, r * Math.sin(startTheta) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(theta125) + x, r * Math.sin(theta125) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(theta25) + x, r * Math.sin(theta25) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(theta375) + x, r * Math.sin(theta375) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(theta5) + x, r * Math.sin(theta5) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(theta625) + x, r * Math.sin(theta625) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(theta75) + x, r * Math.sin(theta75) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(theta875) + x, r * Math.sin(theta875) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(endTheta) + x, r * Math.sin(endTheta) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["z"]];


        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.FlowerSliceSelected = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        cr = r;

        slicePathString = [["M", x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(startTheta) + x, r * Math.sin(startTheta) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(theta125) + x, r * Math.sin(theta125) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(theta25) + x, r * Math.sin(theta25) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(theta375) + x, r * Math.sin(theta375) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(theta5) + x, r * Math.sin(theta5) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(theta625) + x, r * Math.sin(theta625) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(theta75) + x, r * Math.sin(theta75) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["A", cr, cr, 0, 0, 1, r * Math.cos(theta875) + x, r * Math.sin(theta875) + y],
             ["A", cr, cr, 0, 0, 1, x, y],
             ["A", cr, cr, 0, 0, 0, r * Math.cos(endTheta) + x, r * Math.sin(endTheta) + y],
             ["A", cr, cr, 0, 0, 0, x, y],
             ["z"]];


        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.SpiralSlice = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        cr = 0.1;

        slicePathString = [["M", 0.9 * r * Math.cos(startTheta) + x, 0.9 * r * Math.sin(startTheta) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta125) + x, 0.9 * r * Math.sin(theta125) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(startTheta) + x, 0.9 * r * Math.sin(startTheta) + y],
             ["M", 0.8 * r * Math.cos(theta125) + x, 0.8 * r * Math.sin(theta125) + y],
             ["A", cr, cr, 0, 0, 0, 0.8 * r * Math.cos(theta25) + x, 0.8 * r * Math.sin(theta25) + y],
             ["A", cr, cr, 0, 0, 0, 0.8 * r * Math.cos(theta125) + x, 0.8 * r * Math.sin(theta125) + y],
             ["M", 0.7 * r * Math.cos(theta25) + x, 0.7 * r * Math.sin(theta25) + y],
             ["A", cr, cr, 0, 0, 1, 0.7 * r * Math.cos(theta375) + x, 0.7 * r * Math.sin(theta375) + y],
             ["A", cr, cr, 0, 0, 1, 0.7 * r * Math.cos(theta25) + x, 0.7 * r * Math.sin(theta25) + y],
             ["M", 0.6 * r * Math.cos(theta375) + x, 0.6 * r * Math.sin(theta375) + y],
             ["A", cr, cr, 0, 0, 0, 0.6 * r * Math.cos(theta5) + x, 0.6 * r * Math.sin(theta5) + y],
             ["A", cr, cr, 0, 0, 0, 0.6 * r * Math.cos(theta375) + x, 0.6 * r * Math.sin(theta375) + y],
             ["M", 0.5 * r * Math.cos(theta5) + x, 0.5 * r * Math.sin(theta5) + y],
             ["A", cr, cr, 0, 0, 1, 0.5 * r * Math.cos(theta625) + x, 0.5 * r * Math.sin(theta625) + y],
             ["A", cr, cr, 0, 0, 1, 0.5 * r * Math.cos(theta5) + x, 0.5 * r * Math.sin(theta5) + y],
             ["M", 0.4 * r * Math.cos(theta625) + x, 0.4 * r * Math.sin(theta625) + y],
             ["A", cr, cr, 0, 0, 0, 0.4 * r * Math.cos(theta75) + x, 0.4 * r * Math.sin(theta75) + y],
             ["A", cr, cr, 0, 0, 0, 0.4 * r * Math.cos(theta625) + x, 0.4 * r * Math.sin(theta625) + y],
             ["M", 0.3 * r * Math.cos(theta75) + x, 0.3 * r * Math.sin(theta75) + y],
             ["A", cr, cr, 0, 0, 1, 0.3 * r * Math.cos(theta875) + x, 0.3 * r * Math.sin(theta875) + y],
             ["A", cr, cr, 0, 0, 1, 0.3 * r * Math.cos(theta75) + x, 0.3 * r * Math.sin(theta75) + y],
             ["M", 0.2 * r * Math.cos(theta875) + x, 0.2 * r * Math.sin(theta875) + y],
             ["A", cr, cr, 0, 0, 0, 0.2 * r * Math.cos(theta96875) + x, 0.2 * r * Math.sin(theta96875) + y],
             ["A", cr, cr, 0, 0, 0, 0.2 * r * Math.cos(theta875) + x, 0.2 * r * Math.sin(theta875) + y],
             ["M", 0.1 * r * Math.cos(theta96875) + x, 0.1 * r * Math.sin(theta96875) + y],
             ["A", cr, cr, 0, 0, 1, 0.1 * r * Math.cos(endTheta) + x, 0.1 * r * Math.sin(endTheta) + y],
             ["A", cr, cr, 0, 0, 1, 0.1 * r * Math.cos(theta96875) + x, 0.1 * r * Math.sin(theta96875) + y],
             ["M", 0.037 * r * Math.cos(theta96875) + x, 0.037 * r * Math.sin(theta96875) + y],
             ["A", cr, cr, 0, 0, 1, 0.037 * r * Math.cos(endTheta) + x, 0.037 * r * Math.sin(endTheta) + y],
             ["A", cr, cr, 0, 0, 1, 0.037 * r * Math.cos(theta96875) + x, 0.037 * r * Math.sin(theta96875) + y],
             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.SpiralSliceSelected = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        cr = 0.5;

        slicePathString = [["M", 0.9 * r * Math.cos(startTheta) + x, 0.9 * r * Math.sin(startTheta) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta125) + x, 0.9 * r * Math.sin(theta125) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(startTheta) + x, 0.9 * r * Math.sin(startTheta) + y],
             ["M", 0.9 * r * Math.cos(theta125) + x, 0.9 * r * Math.sin(theta125) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(theta25) + x, 0.9 * r * Math.sin(theta25) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(theta125) + x, 0.9 * r * Math.sin(theta125) + y],
             ["M", 0.9 * r * Math.cos(theta25) + x, 0.9 * r * Math.sin(theta25) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta375) + x, 0.9 * r * Math.sin(theta375) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta25) + x, 0.9 * r * Math.sin(theta25) + y],
             ["M", 0.9 * r * Math.cos(theta375) + x, 0.9 * r * Math.sin(theta375) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(theta5) + x, 0.9 * r * Math.sin(theta5) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(theta375) + x, 0.9 * r * Math.sin(theta375) + y],
             ["M", 0.9 * r * Math.cos(theta5) + x, 0.9 * r * Math.sin(theta5) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta625) + x, 0.9 * r * Math.sin(theta625) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta5) + x, 0.9 * r * Math.sin(theta5) + y],
             ["M", 0.9 * r * Math.cos(theta625) + x, 0.9 * r * Math.sin(theta625) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(theta75) + x, 0.9 * r * Math.sin(theta75) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(theta625) + x, 0.9 * r * Math.sin(theta625) + y],
             ["M", 0.9 * r * Math.cos(theta75) + x, 0.9 * r * Math.sin(theta75) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta875) + x, 0.9 * r * Math.sin(theta875) + y],
             ["A", cr, cr, 0, 0, 1, 0.9 * r * Math.cos(theta75) + x, 0.9 * r * Math.sin(theta75) + y],
             ["M", 0.9 * r * Math.cos(theta875) + x, 0.9 * r * Math.sin(theta875) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(endTheta) + x, 0.9 * r * Math.sin(endTheta) + y],
             ["A", cr, cr, 0, 0, 0, 0.9 * r * Math.cos(theta875) + x, 0.9 * r * Math.sin(theta875) + y],
             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaSlice = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;
        
        r = rOriginal * 0.9 * percent;

        cr = (itemIndex + 1) * (r / navItemCount);
        crl = cr - (r / navItemCount) / 2;
        crh = cr + (r / navItemCount) / 2;

        slicePathString = [["M", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],
             ["L", crh * Math.cos(getTheta(30)) + x, crh * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["L", crl * Math.cos(getTheta(30)) + x, crl * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],

             ["M", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["L", crh * Math.cos(getTheta(90)) + x, crh * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["L", crl * Math.cos(getTheta(90)) + x, crl * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             
             ["M", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["L", crh * Math.cos(getTheta(150)) + x, crh * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["L", crl * Math.cos(getTheta(150)) + x, crl * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],

             ["M", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["L", crh * Math.cos(getTheta(210)) + x, crh * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["L", crl * Math.cos(getTheta(210)) + x, crl * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],

             ["M", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["L", crh * Math.cos(getTheta(270)) + x, crh * Math.sin(getTheta(270)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["L", crl * Math.cos(getTheta(270)) + x, crl * Math.sin(getTheta(270)) + y],
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],

             ["M", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["L", crh * Math.cos(getTheta(330)) + x, crh * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(360)) + x, cr * Math.sin(getTheta(360)) + y],
             ["L", crl * Math.cos(getTheta(330)) + x, crl * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],

             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaSliceSelected = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;

        r = rOriginal * 0.9;

        cr = (itemIndex + 1) * (r / navItemCount);
        crh = cr - (r / navItemCount) / 2;
        crl = cr + (r / navItemCount) / 2;

        slicePathString = [["M", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],
             ["L", crh * Math.cos(getTheta(30)) + x, crh * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["L", crl * Math.cos(getTheta(30)) + x, crl * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],

             ["M", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["L", crh * Math.cos(getTheta(90)) + x, crh * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["L", crl * Math.cos(getTheta(90)) + x, crl * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],

             ["M", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["L", crh * Math.cos(getTheta(150)) + x, crh * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["L", crl * Math.cos(getTheta(150)) + x, crl * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],

             ["M", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["L", crh * Math.cos(getTheta(210)) + x, crh * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["L", crl * Math.cos(getTheta(210)) + x, crl * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],

             ["M", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["L", crh * Math.cos(getTheta(270)) + x, crh * Math.sin(getTheta(270)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["L", crl * Math.cos(getTheta(270)) + x, crl * Math.sin(getTheta(270)) + y],
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],

             ["M", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["L", crh * Math.cos(getTheta(330)) + x, crh * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(360)) + x, cr * Math.sin(getTheta(360)) + y],
             ["L", crl * Math.cos(getTheta(330)) + x, crl * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],

             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaTriangleSlice = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;

        r = rOriginal * 0.9 * percent;

        cr = (itemIndex + 1) * (r / navItemCount);
        crl = (itemIndex) * (r / navItemCount);
        crh = (itemIndex + 2) * (r / navItemCount);

        slicePathString = [

             ["M", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(0)) + x, crh * Math.sin(getTheta(0)) + y],
             ["L", cr * Math.cos(getTheta(30)) + x, cr * Math.sin(getTheta(30)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(30)) + x, crh * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],

             ["M", cr * Math.cos(getTheta(30)) + x, cr * Math.sin(getTheta(30)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(30)) + x, crh * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(60)) + x, crh * Math.sin(getTheta(60)) + y],
             ["L", cr * Math.cos(getTheta(30)) + x, cr * Math.sin(getTheta(30)) + y],

             ["M", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(60)) + x, crh * Math.sin(getTheta(60)) + y],
             ["L", cr * Math.cos(getTheta(90)) + x, cr * Math.sin(getTheta(90)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(90)) + x, crh * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],

             ["M", cr * Math.cos(getTheta(90)) + x, cr * Math.sin(getTheta(90)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(90)) + x, crh * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(120)) + x, crh * Math.sin(getTheta(120)) + y],
             ["L", cr * Math.cos(getTheta(90)) + x, cr * Math.sin(getTheta(90)) + y],

             ["M", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(120)) + x, crh * Math.sin(getTheta(120)) + y],
             ["L", cr * Math.cos(getTheta(150)) + x, cr * Math.sin(getTheta(150)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(150)) + x, crh * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],

             ["M", cr * Math.cos(getTheta(150)) + x, cr * Math.sin(getTheta(150)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(150)) + x, crh * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(180)) + x, crh * Math.sin(getTheta(180)) + y],
             ["L", cr * Math.cos(getTheta(150)) + x, cr * Math.sin(getTheta(150)) + y],

             ["M", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(180)) + x, crh * Math.sin(getTheta(180)) + y],
             ["L", cr * Math.cos(getTheta(210)) + x, cr * Math.sin(getTheta(210)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(210)) + x, crh * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],

             ["M", cr * Math.cos(getTheta(210)) + x, cr * Math.sin(getTheta(210)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(210)) + x, crh * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(240)) + x, crh * Math.sin(getTheta(240)) + y],
             ["L", cr * Math.cos(getTheta(210)) + x, cr * Math.sin(getTheta(210)) + y],

             ["M", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(240)) + x, crh * Math.sin(getTheta(240)) + y],
             ["L", cr * Math.cos(getTheta(270)) + x, cr * Math.sin(getTheta(270)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(270)) + x, crh * Math.sin(getTheta(270)) + y], 
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],

             ["M", cr * Math.cos(getTheta(270)) + x, cr * Math.sin(getTheta(270)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(270)) + x, crh * Math.sin(getTheta(270)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(300)) + x, crh * Math.sin(getTheta(300)) + y],
             ["L", cr * Math.cos(getTheta(270)) + x, cr * Math.sin(getTheta(270)) + y],

             ["M", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(300)) + x, crh * Math.sin(getTheta(300)) + y],
             ["L", cr * Math.cos(getTheta(330)) + x, cr * Math.sin(getTheta(330)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(330)) + x, crh * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],

             ["M", cr * Math.cos(getTheta(330)) + x, cr * Math.sin(getTheta(330)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(330)) + x, crh * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(360)) + x, cr * Math.sin(getTheta(360)) + y],
             ["A", 1, 1, 0, 0, 1, crh * Math.cos(getTheta(360)) + x, crh * Math.sin(getTheta(360)) + y],
             ["L", cr * Math.cos(getTheta(330)) + x, cr * Math.sin(getTheta(330)) + y],
             
             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaTriangleSliceSelected = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;

        r = rOriginal * 0.9 * percent;

        crh = (itemIndex + 1) * (r / navItemCount);
        crl = (itemIndex) * (r / navItemCount);
        cr = (itemIndex + 2) * (r / navItemCount);

        slicePathString = [

             ["M", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(0)) + x, crh * Math.sin(getTheta(0)) + y],
             ["L", cr * Math.cos(getTheta(30)) + x, cr * Math.sin(getTheta(30)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(30)) + x, crh * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],

             ["M", cr * Math.cos(getTheta(30)) + x, cr * Math.sin(getTheta(30)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(30)) + x, crh * Math.sin(getTheta(30)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(60)) + x, crh * Math.sin(getTheta(60)) + y],
             ["L", cr * Math.cos(getTheta(30)) + x, cr * Math.sin(getTheta(30)) + y],

             ["M", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(60)) + x, crh * Math.sin(getTheta(60)) + y],
             ["L", cr * Math.cos(getTheta(90)) + x, cr * Math.sin(getTheta(90)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(90)) + x, crh * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],

             ["M", cr * Math.cos(getTheta(90)) + x, cr * Math.sin(getTheta(90)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(90)) + x, crh * Math.sin(getTheta(90)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(120)) + x, crh * Math.sin(getTheta(120)) + y],
             ["L", cr * Math.cos(getTheta(90)) + x, cr * Math.sin(getTheta(90)) + y],

             ["M", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(120)) + x, crh * Math.sin(getTheta(120)) + y],
             ["L", cr * Math.cos(getTheta(150)) + x, cr * Math.sin(getTheta(150)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(150)) + x, crh * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],

             ["M", cr * Math.cos(getTheta(150)) + x, cr * Math.sin(getTheta(150)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(150)) + x, crh * Math.sin(getTheta(150)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(180)) + x, crh * Math.sin(getTheta(180)) + y],
             ["L", cr * Math.cos(getTheta(150)) + x, cr * Math.sin(getTheta(150)) + y],

             ["M", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(180)) + x, crh * Math.sin(getTheta(180)) + y],
             ["L", cr * Math.cos(getTheta(210)) + x, cr * Math.sin(getTheta(210)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(210)) + x, crh * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],

             ["M", cr * Math.cos(getTheta(210)) + x, cr * Math.sin(getTheta(210)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(210)) + x, crh * Math.sin(getTheta(210)) + y],
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(240)) + x, crh * Math.sin(getTheta(240)) + y],
             ["L", cr * Math.cos(getTheta(210)) + x, cr * Math.sin(getTheta(210)) + y],

             ["M", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(240)) + x, crh * Math.sin(getTheta(240)) + y],
             ["L", cr * Math.cos(getTheta(270)) + x, cr * Math.sin(getTheta(270)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(270)) + x, crh * Math.sin(getTheta(270)) + y],
             ["L", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],

             ["M", cr * Math.cos(getTheta(270)) + x, cr * Math.sin(getTheta(270)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(270)) + x, crh * Math.sin(getTheta(270)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(300)) + x, crh * Math.sin(getTheta(300)) + y],
             ["L", cr * Math.cos(getTheta(270)) + x, cr * Math.sin(getTheta(270)) + y],

             ["M", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(300)) + x, crh * Math.sin(getTheta(300)) + y],
             ["L", cr * Math.cos(getTheta(330)) + x, cr * Math.sin(getTheta(330)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(330)) + x, crh * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],

             ["M", cr * Math.cos(getTheta(330)) + x, cr * Math.sin(getTheta(330)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(330)) + x, crh * Math.sin(getTheta(330)) + y],
             ["L", cr * Math.cos(getTheta(360)) + x, cr * Math.sin(getTheta(360)) + y],
             ["A", 1, 1, 0, 0, 0, crh * Math.cos(getTheta(360)) + x, crh * Math.sin(getTheta(360)) + y],
             ["L", cr * Math.cos(getTheta(330)) + x, cr * Math.sin(getTheta(330)) + y],

             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaCircleSlice = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;

        r = rOriginal * 0.9 * percent;

        cr = (itemIndex + 1) * (r / navItemCount);
        crl = cr - (r / navItemCount) / 2;
        crh = cr + (r / navItemCount) / 2;

        slicePathString = [["M", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],

             ["M", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],

             ["M", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],

             ["M", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],

             ["M", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],

             ["M", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(360)) + x, cr * Math.sin(getTheta(360)) + y],
             ["A", cr, cr, 0, 0, 0, cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],

             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaCircleSliceSelected = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;

        r = rOriginal * 0.9;

        cr = (itemIndex + 1) * (r / navItemCount);
        crl = cr - (r / navItemCount) / 2;
        crh = cr + (r / navItemCount) / 2;

        slicePathString = [["M", cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(0)) + x, cr * Math.sin(getTheta(0)) + y],

             ["M", cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(60)) + x, cr * Math.sin(getTheta(60)) + y],

             ["M", cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(120)) + x, cr * Math.sin(getTheta(120)) + y],

             ["M", cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(180)) + x, cr * Math.sin(getTheta(180)) + y],

             ["M", cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(240)) + x, cr * Math.sin(getTheta(240)) + y],

             ["M", cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(360)) + x, cr * Math.sin(getTheta(360)) + y],
             ["A", cr, cr, 0, 0, 1, cr * Math.cos(getTheta(300)) + x, cr * Math.sin(getTheta(300)) + y],

             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaFlowerSlice = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;

        cr = (itemIndex + 1) * (r / navItemCount);

        if (((itemIndex + 1) % 2) == 0) {
            shiftAngle = 0;
        }
        else {
            shiftAngle = 15;
        }

        cr2 = 0.8 * cr;

        slicePathString = [["M", x, y],
             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(30 + shiftAngle)) + x, cr * Math.sin(getTheta(30 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(60 + shiftAngle)) + x, cr * Math.sin(getTheta(60 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(90 + shiftAngle)) + x, cr * Math.sin(getTheta(90 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(120 + shiftAngle)) + x, cr * Math.sin(getTheta(120 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(150 + shiftAngle)) + x, cr * Math.sin(getTheta(150 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(180 + shiftAngle)) + x, cr * Math.sin(getTheta(180 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(210 + shiftAngle)) + x, cr * Math.sin(getTheta(210 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(240 + shiftAngle)) + x, cr * Math.sin(getTheta(240 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(270 + shiftAngle)) + x, cr * Math.sin(getTheta(270 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(300 + shiftAngle)) + x, cr * Math.sin(getTheta(300 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(330 + shiftAngle)) + x, cr * Math.sin(getTheta(330 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(360 + shiftAngle)) + x, cr * Math.sin(getTheta(360 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    this.HexaFlowerSliceSelected = function (helper, percent, custom) {

        setBaseValue(helper, percent, custom);

        titleRadius = r * 0.8;
        setTitlePos(x, y);
        navItemCount = 360 / sliceAngle;

        cr = (itemIndex + 1) * (r / navItemCount);

        if (((itemIndex + 1) % 2) == 0) {
            shiftAngle = 15;
        }
        else {
            shiftAngle = 0;
        }
        
        cr2 = 0.8 * cr;

        slicePathString = [["M", x, y],
             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(30 + shiftAngle)) + x, cr * Math.sin(getTheta(30 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(60 + shiftAngle)) + x, cr * Math.sin(getTheta(60 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(90 + shiftAngle)) + x, cr * Math.sin(getTheta(90 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(120 + shiftAngle)) + x, cr * Math.sin(getTheta(120 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(150 + shiftAngle)) + x, cr * Math.sin(getTheta(150 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(180 + shiftAngle)) + x, cr * Math.sin(getTheta(180 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(210 + shiftAngle)) + x, cr * Math.sin(getTheta(210 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(240 + shiftAngle)) + x, cr * Math.sin(getTheta(240 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(270 + shiftAngle)) + x, cr * Math.sin(getTheta(270 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(300 + shiftAngle)) + x, cr * Math.sin(getTheta(300 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["A", cr2, cr2, 0, 0, 0, cr * Math.cos(getTheta(330 + shiftAngle)) + x, cr * Math.sin(getTheta(330 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 0, x, y],

             ["A", cr2, cr2, 0, 0, 1, cr * Math.cos(getTheta(360 + shiftAngle)) + x, cr * Math.sin(getTheta(360 + shiftAngle)) + y],
             ["A", cr2, cr2, 0, 0, 1, x, y],

             ["z"]];

        return {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }

    return this;
}


