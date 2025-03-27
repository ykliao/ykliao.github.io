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
	        "maxpan": 10.047174907270744,
	        "maxtilt": 5.360411193307862,
	        "minpan": 0,
	        "mintilt": -4.570086844071942
	    },
	"id": "ursamajor",
	"image":{"baseindex":1,"bitmap":[{"height":2206,"src":"ursamajor_tiles/ursamajor_t_1_%y_%x.jpg","tilesize":552,"width":2232},{"height":1103,"src":"ursamajor_tiles/ursamajor_t_2_%y_%x.jpg","tilesize":552,"width":1116},{"height":552,"src":"ursamajor_tiles/ursamajor_t_3_%y_%x.jpg","tilesize":552,"width":558}],"multilevel":true,"preview":{"src":"ursamajor_tiles/ursamajor_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}