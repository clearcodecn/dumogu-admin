package main

import "github.com/gin-gonic/gin"

func main() {
	g := gin.Default()
	g.Static("/", "web/dist")
	g.Run(":8120")
}
