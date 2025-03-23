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
	        "maxpan": 13.981526494895462,
	        "maxtilt": 7.281848266496456,
	        "minpan": 0,
	        "mintilt": -6.077412793299358
	    },
	"id": "ursamajor",
	"image":{"baseindex":1,"bitmap":[{"height":2968,"src":"ursamajor_tiles/ursamajor_t_1_%y_%x.jpg","tilesize":480,"width":3106},{"height":1484,"src":"ursamajor_tiles/ursamajor_t_2_%y_%x.jpg","tilesize":480,"width":1553},{"height":742,"src":"ursamajor_tiles/ursamajor_t_3_%y_%x.jpg","tilesize":480,"width":777},{"height":371,"src":"ursamajor_tiles/ursamajor_t_4_%y_%x.jpg","tilesize":480,"width":389}],"multilevel":true,"preview":{"src":"ursamajor_tiles/ursamajor_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}