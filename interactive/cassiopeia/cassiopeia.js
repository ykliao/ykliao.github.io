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
	        "maxpan": 96.11408199643495,
	        "maxtilt": 27.053343164091746,
	        "minpan": 0,
	        "mintilt": -25.210471452664056
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":11611,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":480,"width":21352},{"height":5806,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":480,"width":10676},{"height":2903,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":480,"width":5338},{"height":1452,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":480,"width":2669},{"height":726,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":480,"width":1335},{"height":363,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":480,"width":668}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}