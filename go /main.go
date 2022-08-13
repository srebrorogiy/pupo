package main

import "fmt"

func main() {
	/*	fmt.Println(32132 * 42452)
			fmt.Println(len("privet"))
			//var y string = "Hek"
			x := 7
			fmt.Println(x)

			var (
				a = 3
				b = 3
				c = 8
			)
			fmt.Println(a + b + c)
		}
		fmt.Print("Enter a number: ")
		var input float64
		fmt.Scanf("%f", &input)

		output := input * 2

		fmt.Println(output)*/

	fmt.Println("Enter: ")
	var input float64
	fmt.Scanf("%f", &input)

	output := (input - 32) * 5 / 9

	fmt.Println(output)

	// не совсем поняла как работает switch

	var i string

	switch i {
	case 0:
		fmt.Println("Zero")
	case 1:
		fmt.Println("One")
	case 2:
		fmt.Println("Two")
	case 3:
		fmt.Println("Three")
	case 4:
		fmt.Println("Four")
	case 5:
		fmt.Println("Five")
	default:
		fmt.Println("Unknown Number")
	}
}
