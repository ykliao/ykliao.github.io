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
	        "maxpan": 9.897909577054008,
	        "maxtilt": 5.1622786874844815,
	        "minpan": 0,
	        "mintilt": -5.1051009916599055
	    },
	"id": "ursamajor",
	"image":{"baseindex":1,"bitmap":[{"height":2281,"src":"ursamajor_tiles/ursamajor_t_1_%y_%x.jpg","tilesize":550,"width":2199},{"height":1141,"src":"ursamajor_tiles/ursamajor_t_2_%y_%x.jpg","tilesize":550,"width":1100},{"height":571,"src":"ursamajor_tiles/ursamajor_t_3_%y_%x.jpg","tilesize":550,"width":550}],"multilevel":true,"preview":{"src":"ursamajor_tiles/ursamajor_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}