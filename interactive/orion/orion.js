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
            "src": "orion_controls.js"
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
	        "maxpan": 14.71424970290613,
	        "maxtilt": 6.980863982404775,
	        "minpan": 0,
	        "mintilt": -2.508854768720576
	    },
	"id": "orion",
	"image":{"baseindex":1,"bitmap":[{"height":2108,"src":"orion_tiles/orion_t_1_%y_%x.jpg","tilesize":527,"width":3269},{"height":1054,"src":"orion_tiles/orion_t_2_%y_%x.jpg","tilesize":527,"width":1635},{"height":527,"src":"orion_tiles/orion_t_3_%y_%x.jpg","tilesize":527,"width":818}],"multilevel":true,"preview":{"src":"orion_tiles/orion_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}