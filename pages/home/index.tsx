import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Home = () => {

  const router = useRouter()


  //Types
  type Recipe = {
    id: Number;
    created_at: String;
    main_img: String;
    title: String;
    intro: String;
    cook: String;
    total_time_hours: Number;
    total_time_minutes: Number;
    prep_time_hours: Number;
    prep_time_minutes: Number;
    cook_time_hours: Number;
    cook_time_minutes: Number;
    servings: Number;
    ingredients: Object;
    preparation_instructions: String;
    meal_type: Object;
    meat_base: Object;
    rating: Number
  }

  // Recipes
  //https://supabase.com/docs/guides/api
  // https://<project_ref>.supabase.co/rest/v1/
  // https://supabase.com/docs/guides/api/quickstart?queryGroups=database-method&database-method=sql
  //`${process.env.NEXT_PUBLIC_SUPABASE_API_URL}recipes?apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_API_URL}recipes?apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`)
        const recipes = await data.json()
        // console.log('here we go: ', recipes)
        setRecipes(recipes)
        setLoading(false)
      } catch (error) {
        console.log('error fetching recipes', error)
      }
    }

    fetchRecipes()
  }, [])  

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Recipes</h1>
        <ul className="space-y-4">
          {recipes.map(recipe => (
            <li key={recipe.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              {/* <p>{recipe.description}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}

export default Home