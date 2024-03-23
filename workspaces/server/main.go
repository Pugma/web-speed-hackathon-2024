package main

import (
	"Pugma/webspeed2024/db"
	"Pugma/webspeed2024/handler"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main(){
	e := echo.New()
	e.Use(middleware.Logger())

	// DBのセットアップ
	db.SetUp()

	e.GET("/authors/:authorId", handler.GetAuthor)

	e.Logger.Fatal(e.Start(":8080"))
}