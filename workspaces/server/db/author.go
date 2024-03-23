package db

import (
	"Pugma/webspeed2024/api"
	"log/slog"
)

func SelectAuthor(authorId *string) (api.GetAuthorDetail, error) {
	var authorDetailWithoutBooks *api.GetAuthorDetail
	err := db.Select(authorDetailWithoutBooks, "SELECT * FROM `author` WHERE `id`=?", &authorId)
	if err != nil {
		slog.Error("Failed to find author in db: %v", err)
	}

	// 著者ごとの著作データを一括で取得
	books, err := SelectBookWithAuthor(authorId)
	if err != nil {
		slog.Error("")
	}

	authorDetail := api.GetAuthorDetail{
		Books:       &books,
		Description: authorDetailWithoutBooks.Description,
		Id:          authorDetailWithoutBooks.Id,
		Name:        authorDetailWithoutBooks.Name,
	}
	return authorDetail, nil
}

func SelectBookWithAuthor(authorId *string) ([]api.AuthorDetailBooksItem, error) {
	var authorsBooksDB []*dbAuthorBookListItem
	err := db.Get(authorsBooksDB, "SELECT * FROM `book` WHERE `author_id`=?", &authorId)
	if err != nil {
		slog.Error("Failed to get author's books: %v", err)
	}
	var authorsBooks []api.AuthorDetailBooksItem
	for _, item := range authorsBooksDB {
		convertedItem := api.AuthorDetailBooksItem{
			Description: item.Description,
			Id:          item.Id,
			Image:       item.Image,
			Name:        item.Name,
		}
		authorsBooks = append(authorsBooks, convertedItem)
	}
	return authorsBooks, nil
}
