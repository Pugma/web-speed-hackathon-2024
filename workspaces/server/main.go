package main

import (
	"Pugma/webspeed2024/db"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main(){
	e := echo.New()
	e.Use(middleware.Logger())

	// DBのセットアップ
	db.SetUp()

	e.Logger.Fatal(e.Start(":8080"))
}