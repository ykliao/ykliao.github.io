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
	        "maxpan": 177.6138328530259,
	        "maxtilt": 73.55619596541786,
	        "minpan": 0,
	        "mintilt": -68.68011527377523
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":31589,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":494,"width":39446},{"height":15795,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":494,"width":19723},{"height":7898,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":494,"width":9862},{"height":3949,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":494,"width":4931},{"height":1975,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":494,"width":2466},{"height":988,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":494,"width":1233},{"height":494,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":494,"width":617}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}