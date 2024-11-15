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
	        "maxpan": 161.7406340057637,
	        "maxtilt": 57.060518731988466,
	        "minpan": 0,
	        "mintilt": -39.63112391930837
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":21474,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":480,"width":35920},{"height":10737,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":480,"width":17960},{"height":5369,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":480,"width":8980},{"height":2685,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":480,"width":4490},{"height":1343,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":480,"width":2245},{"height":672,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":480,"width":1123},{"height":336,"src":"cassiopeia_tiles/cassiopeia_t_7_%0y_%0x.jpg","tilesize":480,"width":562}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}