package db

import "Pugma/webspeed2024/api"

type dbAuthorBookListItem struct {
	Description string    `db:"description"`
	Id          string    `db:"id"`
	Image       api.Image `db:"image"`
	Name        string    `db:"name"`
}
