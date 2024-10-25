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
	        "maxpan": 129.4327390599676,
	        "maxtilt": 56.888168557536495,
	        "minpan": 0,
	        "mintilt": -35.980551053484604
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":20631,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":480,"width":28754},{"height":10316,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":480,"width":14377},{"height":5158,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":480,"width":7189},{"height":2579,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":480,"width":3595},{"height":1290,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":480,"width":1798},{"height":645,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":480,"width":899},{"height":323,"src":"cassiopeia_tiles/cassiopeia_t_7_%0y_%0x.jpg","tilesize":480,"width":450}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}