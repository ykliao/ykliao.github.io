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
	        "maxpan": 95.3624001121548,
	        "maxtilt": 17.784242254310936,
	        "minpan": 0,
	        "mintilt": -17.115519416795166
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":52010,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":813,"width":142116},{"height":26005,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":813,"width":71058},{"height":13003,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":813,"width":35529},{"height":6502,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":813,"width":17765},{"height":3251,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":813,"width":8883},{"height":1626,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":813,"width":4442},{"height":813,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":813,"width":2221}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}