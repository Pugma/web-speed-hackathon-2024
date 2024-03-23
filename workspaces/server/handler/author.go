package handler

import (
	"log/slog"

	"github.com/labstack/echo/v4"
)

func GetAuthor(ctx echo.Context) error {
	authorId := ctx.Param("authorId")
	slog.Info(authorId)
	return nil
}

func GetAuthorList(ctx echo.Context) error {
	query := ctx.QueryParam("authorId")
	slog.Info(query)
	return nil
}
