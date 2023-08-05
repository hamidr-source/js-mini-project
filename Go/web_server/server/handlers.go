package server

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
)

func (handler *server) Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from hamid!")
}

func (handler *server) Bmi(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		fmt.Fprintf(w, "sorry, only post method can given!")
	} else {
		defer r.Body.Close()

		rawBody , err := io.ReadAll(r.Body)
		if err != nil {
			panic(err)
		}		

		body := &struct{
			height float64 `json:"height"`
			weight float64 `json:"weight"`
		}{}

		err = json.Unmarshal(rawBody, body)
		if err != nil {
			panic(err)
		}	

		if body.height < 40 || body.height > 250 {
			fmt.Fprintf(w, "invalid height provided %.2f", body.height)
			return
		}
		body.height *= 0.01

		if body.weight < 5 || body.weight > 200 {
			fmt.Fprintf(w, "invalid weight provided %.2f", body.weight)
			return
		}

		bmi := body.weight / (body.height * body.height)

		fmt.Fprintf(w, "your BMI is = %.2f ", bmi)
	}
}

func (handler *server) incrementCounter(w http.ResponseWriter, r *http.Request) {
	handler.counter++
	fmt.Fprintf(w, strconv.Itoa(handler.counter))
}