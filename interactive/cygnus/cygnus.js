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
            "src": "cygnus_controls.js"
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
	        "maxpan": 126.74157303370795,
	        "maxtilt": 49.47371593532912,
	        "minpan": 0,
	        "mintilt": -38.80349906221745
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":19612,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":613,"width":28157},{"height":9806,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":613,"width":14079},{"height":4903,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":613,"width":7040},{"height":2452,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":613,"width":3520},{"height":1226,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":613,"width":1760},{"height":613,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":613,"width":880}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}