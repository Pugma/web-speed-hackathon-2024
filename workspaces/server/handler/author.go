package handler

import (
	"Pugma/webspeed2024/api"
	"Pugma/webspeed2024/db"
	"log/slog"

	"github.com/labstack/echo/v4"
)

func GetAuthor(ctx echo.Context) error {
	authorId := ctx.Param("authorId")
	var authorResponse api.GetAuthorDetail
	authorResponse, err := db.SelectAuthor(&authorId)
	if err !=nil{
		slog.Error("Failed to get author info from db: %v", err)
	}
	return ctx.JSON(200, authorResponse)
}

func GetAuthorList(ctx echo.Context) error {
	query := ctx.QueryParam("authorId")
	slog.Info(query)
	return nil
}
