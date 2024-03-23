package handler

import "github.com/labstack/echo/v4"

func GetAuthor (ctx echo.Context) error{
	authorId := ctx.Param("authorId")
	
	return nil
}

func GetAuthorList (ctx echo.Context) error {
	query := ctx.QueryParam("authorId")
	return nil
}