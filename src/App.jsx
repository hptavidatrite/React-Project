import ProductList from './components/ProductList'
import Categories from './components/Categories'
import ShoppingCart from './components/Shopping-card'
import './App.css'

function App() {
  return (
   <>
    <header>
      <div className='divlogo'><img src="./public/Logo.png" className='logo'></img>
        Tienda la Economia 
      </div>
      <ShoppingCart />
    </header>
    <main>
      <aside>
        <Categories />
      </aside>
      <section> 
        <ProductList />
      </section>
    </main>
    <footer>
      uwu
    </footer>
   </>
  )
}

export default App
