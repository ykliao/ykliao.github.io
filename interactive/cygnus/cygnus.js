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
	        "maxpan": 249.0233362143475,
	        "maxtilt": 83.79246237038546,
	        "minpan": 0,
	        "mintilt": -80.82108902333621
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":36570,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":572,"width":55322},{"height":18285,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":572,"width":27661},{"height":9143,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":572,"width":13831},{"height":4572,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":572,"width":6916},{"height":2286,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":572,"width":3458},{"height":1143,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":572,"width":1729},{"height":572,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":572,"width":865}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}