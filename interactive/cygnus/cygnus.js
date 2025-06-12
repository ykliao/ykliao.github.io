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
	        "maxpan": 238.44425237683663,
	        "maxtilt": 82.04491393074107,
	        "minpan": 0,
	        "mintilt": -76.04708091830456
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":35121,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":549,"width":52972},{"height":17561,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":549,"width":26486},{"height":8781,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":549,"width":13243},{"height":4391,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":549,"width":6622},{"height":2196,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":549,"width":3311},{"height":1098,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":549,"width":1656},{"height":549,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":549,"width":828}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}