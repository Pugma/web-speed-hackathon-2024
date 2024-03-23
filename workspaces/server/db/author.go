package db

import (
	"Pugma/webspeed2024/api"
	"log/slog"
)

func SelectAuthor(authorId *string) (api.GetAuthorDetail, error) {
	row := db.QueryRow("SELECT * FROM `author` WHERE `id`=$1", &authorId)
	var authorDetail api.GetAuthorDetail
	err := row.Scan(
		&authorDetail.Books,
		&authorDetail.Description,
		&authorDetail.Id,
		&authorDetail.Name,
	)
	if err != nil {
		slog.Error("Failed to convert type from db: %v", err)
	}
	return authorDetail, nil
}
