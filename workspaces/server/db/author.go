package db

import "log/slog"

func SelectAuthor(authorId *string)  error {
	_, err := db.Query("")
	if err != nil {
		slog.Error("Failed to get author: %v", err)
	}
	return nil
}
