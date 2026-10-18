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
            "src": "cygnus_controls_controls.js"
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
	        "maxpan": 60.71741645920261,
	        "maxtilt": 13.19130833356086,
	        "minpan": 0,
	        "mintilt": -12.749846852626996
	    },
	"id": "cygnus_controls",
	"image":{"baseindex":1,"bitmap":[{"height":58455,"src":"cygnus_controls_tiles/cygnus_controls_t_1_%000y_%000x.jpg","tilesize":914,"width":136818},{"height":29228,"src":"cygnus_controls_tiles/cygnus_controls_t_2_%000y_%000x.jpg","tilesize":914,"width":68409},{"height":14614,"src":"cygnus_controls_tiles/cygnus_controls_t_3_%000y_%000x.jpg","tilesize":914,"width":34205},{"height":7307,"src":"cygnus_controls_tiles/cygnus_controls_t_4_%000y_%000x.jpg","tilesize":914,"width":17103},{"height":3654,"src":"cygnus_controls_tiles/cygnus_controls_t_5_%000y_%000x.jpg","tilesize":914,"width":8552},{"height":1827,"src":"cygnus_controls_tiles/cygnus_controls_t_6_%000y_%000x.jpg","tilesize":914,"width":4276},{"height":914,"src":"cygnus_controls_tiles/cygnus_controls_t_7_%000y_%000x.jpg","tilesize":914,"width":2138}],"multilevel":true,"preview":{"src":"cygnus_controls_tiles/cygnus_controls_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}