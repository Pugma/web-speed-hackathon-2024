package db

import (
	"database/sql"
	"log/slog"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func SetUp() error {
	_db, err := sql.Open("sqlite3", "../seeds/database.sqlite")
	if err != nil {
		slog.Error("Failed connecting to db: %v", err)
	}
	db = _db
	return nil
}
