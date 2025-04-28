PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "ursamajor_controls.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 0.08,
	        "reference": "screen",
	        "restart": 5,
	        "returnToLevel": true,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 17.1132238547969,
	        "maxtilt": 7.720397579948144,
	        "minpan": 0,
	        "mintilt": -12.815471045808126
	    },
	"id": "ursamajor",
	"image":{"baseindex":1,"bitmap":[{"height":4562,"src":"ursamajor_tiles/ursamajor_t_1_%y_%x.jpg","tilesize":480,"width":3802},{"height":2281,"src":"ursamajor_tiles/ursamajor_t_2_%y_%x.jpg","tilesize":480,"width":1901},{"height":1141,"src":"ursamajor_tiles/ursamajor_t_3_%y_%x.jpg","tilesize":480,"width":951},{"height":571,"src":"ursamajor_tiles/ursamajor_t_4_%y_%x.jpg","tilesize":480,"width":476}],"multilevel":true,"preview":{"src":"ursamajor_tiles/ursamajor_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}