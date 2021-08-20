We are implementing our own bookstore. The homework should be done with using context. Btw do not get limited if you have to create local state just
for particular component. (as discussed in class)

1. Create a bookstore global state using the context, by default this store should contain at least 3 books.
	-The book props should be id, name, published (year of publishing), authorName, genre.
2. Print those books in the ui as cards or as you want, use your imagination :D. Each book card should have the option to add to cart. (as we did on class).
 	-Each time we add a book to the cart, we should disable the add button and write with red color font SOLD above/below of the book card/name :).

3. Below or on the side, print how many items we do have in the cart (for example cart : 4), and next to this create a toggle button that will
show/hide what we do have in cart, and each element from the cart, when printed should have option to remove from cart.

4. Create a toggle button that displays/hides a form. This form will be to add a book. The form should contain the same properties as the default books,
but we have to add one more property to this created book and that is createdAt (which will be date , as a hint javascript provides us with inner built
method that generates date at the moment =) .) And when we display the form, we want the first field of the form for example the name of the book to be 
preselected for us, so the user can instantly start typing . =) . As you guessed this add book form will add book to our bookstore state prviously created
and this book shuld be printed as well.

BONUS: 
Each book object should have property inStock (which is representing how much books of it we have in stock) 
  -And when clicking on add to cart button we do not instantly disable it and write message SOLD, but now, we can click the add to cart button
   as many times as we have that book in stock :). And when our stock runs out, disable the add to stock button and with red message on the top of
   the book card write OUR OF STOCK. As you guessed, when we remove from cart that particular book, we will increment the stock of that book :)
