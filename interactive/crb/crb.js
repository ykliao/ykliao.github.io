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
            "src": "crb_controls.js"
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
	        "maxpan": 45.06329113924053,
	        "maxtilt": 36.29746835443036,
	        "minpan": 0,
	        "mintilt": -36.3607594936709
	    },
	"id": "crb",
	"image":{"baseindex":1,"bitmap":[{"height":1653,"src":"crb_tiles/crb_t_1_%y_%x.jpg","tilesize":513,"width":1025},{"height":827,"src":"crb_tiles/crb_t_2_%y_%x.jpg","tilesize":513,"width":513}],"multilevel":true,"preview":{"src":"crb_tiles/crb_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}