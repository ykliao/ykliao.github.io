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
	        "maxpan": 96.89913544668585,
	        "maxtilt": 64.63400576368875,
	        "minpan": 0,
	        "mintilt": -64.63400576368876
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":28709,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":480,"width":21520},{"height":14355,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":480,"width":10760},{"height":7178,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":480,"width":5380},{"height":3589,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":480,"width":2690},{"height":1795,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":480,"width":1345},{"height":898,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":480,"width":673},{"height":449,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":480,"width":337}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}