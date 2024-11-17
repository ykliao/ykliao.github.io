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
	        "maxpan": 172.01152737752165,
	        "maxtilt": 60.172910662824215,
	        "minpan": 0,
	        "mintilt": -65.15273775216139
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":27833,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":480,"width":38201},{"height":13917,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":480,"width":19101},{"height":6959,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":480,"width":9551},{"height":3480,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":480,"width":4776},{"height":1740,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":480,"width":2388},{"height":870,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":480,"width":1194},{"height":435,"src":"cassiopeia_tiles/cassiopeia_t_7_%0y_%0x.jpg","tilesize":480,"width":597}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}