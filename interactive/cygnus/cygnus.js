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
	        "maxpan": 64.75682878081278,
	        "maxtilt": 13.115598124030356,
	        "minpan": 0,
	        "mintilt": -12.093445448834544
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":56805,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":888,"width":145920},{"height":28403,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":888,"width":72960},{"height":14202,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":888,"width":36480},{"height":7101,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":888,"width":18240},{"height":3551,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":888,"width":9120},{"height":1776,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":888,"width":4560},{"height":888,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":888,"width":2280}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}