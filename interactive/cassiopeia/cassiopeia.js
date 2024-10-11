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
            "src": "cassiopeia_controls.js"
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
	        "maxpan": 119.93515266144281,
	        "maxtilt": 45.75544082315228,
	        "minpan": 0,
	        "mintilt": -37.022186845045525
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":18384,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":575,"width":26636},{"height":9192,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":575,"width":13318},{"height":4596,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":575,"width":6659},{"height":2298,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":575,"width":3330},{"height":1149,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":575,"width":1665},{"height":575,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":575,"width":833}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}