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
	        "maxpan": 117.30643127364439,
	        "maxtilt": 35.26322272457158,
	        "minpan": 0,
	        "mintilt": -38.37107740153181
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":16353,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":512,"width":26052},{"height":8177,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":512,"width":13026},{"height":4089,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":512,"width":6513},{"height":2045,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":512,"width":3257},{"height":1023,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":512,"width":1629},{"height":512,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":512,"width":815}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}