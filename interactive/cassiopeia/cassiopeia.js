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
	        "maxpan": 104.92706645056721,
	        "maxtilt": 36.07779578606159,
	        "minpan": 0,
	        "mintilt": -41.91247974068071
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":17326,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":542,"width":23310},{"height":8663,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":542,"width":11655},{"height":4332,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":542,"width":5828},{"height":2166,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":542,"width":2914},{"height":1083,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":542,"width":1457},{"height":542,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":542,"width":729}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}