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
	        "maxpan": 114.26256077795782,
	        "maxtilt": 33.74392220421394,
	        "minpan": 0,
	        "mintilt": -40.84278768233388
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":16570,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":518,"width":25384},{"height":8285,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":518,"width":12692},{"height":4143,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":518,"width":6346},{"height":2072,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":518,"width":3173},{"height":1036,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":518,"width":1587},{"height":518,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":518,"width":794}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}