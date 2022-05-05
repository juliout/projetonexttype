import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { AsideMenu, BodyShoesPage, MainShowCase, BoxColor, MainPriceS, DivItensShowCase, CardItem, BackGroundDivCard } from '../../../styles/shoesPageStyle';

type CardSet = [{
  id: number,
  name: string,
  type: string,
  price: string,
  gender: string,
  stamp: string,
  size: [string],
  colors: string,
  image: string
}]
type Color = [string]
type Numeric = number

const Nike: React.FC = () => {

  useEffect(()=> {
    function mainRaid() {
      try {
        fetch('https://juliout.github.io/shoesApi/shoesApi.json')
        .then(response => response.json())
        .then(data => {
          setMainRaid(data.Addidas)
          setSearch(data.Addidas)
          let allColor:any = []
          data.Addidas.map((c:any) => {
            c.colors.map((color:string) => {
              allColor.push(color)
            })
          })
          let finishColor:any = Array.from(new Set(allColor))
          setColor(finishColor)
          console.log(finishColor)

        }
        )       
      } catch (e) {
        console.log('Deu algum erro em : ' + e)
      }
    }
    mainRaid()
  },[])
  const [below, setBelow] = useState<Numeric>(0)
  const [above, setAbove] = useState<Numeric>(0)
  const [colors, setColor] = useState<Color>([''])
  const [nameTitle, setNameTitle] = useState('All')

  const [mainRaid, setMainRaid] = useState<CardSet>([
    { 'id' : 0,
    'name' : '',
    'type' : '',
    'price':  '',
    'gender':'',
    'stamp': '',
    'size': [''],
    'colors': '',
    'image': ''
  }
  ])
  const [search, setSearch] = useState<CardSet>([
    {
    'id' : 0,
    'name' : '',
    'type' : '',
    'price':  '',
    'gender':'',
    'stamp': '',
    'size': [''],
    'colors': '',
    'image': ''
  }])

  const searchGender = (arg:string) => {
    let result:any = []

    mainRaid.map(rest => {
      if(rest.gender === arg) {
        result.push(rest)
      }
    })
    setSearch(result)
    setNameTitle(`${arg}`)
  }

  const searchType = (arg:string, arg2?:string) => {
    let result:any = []

    mainRaid.map(rest => {
      if(rest.type === arg || rest.type === arg2 ) {
        result.push(rest)
      }
    })
    setSearch(result)
    if(arg && arg2) {
      return setNameTitle('Soccer')
    }else if (arg === 'Corrida') {
      setNameTitle('Running')
    } else {
      setNameTitle('Casual')
    }
  }

  const searchColor = (arg:string) => {
    let seachAllColor:any = []

    mainRaid.map((raid:any) => {
      raid.colors.map((color:any) => {
        if(color === arg){
          seachAllColor.push(raid)
        }
      })
    })
    setSearch(seachAllColor)
    setNameTitle(`${arg}`)
    
  }

  const searchToPrice = (arg:number, arg2:number) => {
    let result:any = []
    console.log(arg, arg2)
    mainRaid.map((res:any) => {
      
      if(Number(res.price) > arg2 && Number(res.price) <= arg) {
        result.push(res)
      }
    })
    setSearch(result)
    setNameTitle(`price between${arg2}and ${arg}`)
  }

  return (
    <>
      <Header/>
      <BodyShoesPage>
        <AsideMenu>
          <h1>Filters</h1>
          <ul>
            <li onClick={() => {
              setSearch(mainRaid)
              setNameTitle('All')
            }}>
              <input type="radio" name="menuCheck" id="AllShoes" defaultChecked/>
              <label htmlFor="AllShoes">AllShoes</label>
            </li>
            <div className='divOptionsMenu'>
              <li onClick={() => searchGender('Male')}>
                <input type="radio" name="menuCheck" id="man" />
                <label htmlFor="man">Man</label>
              </li>
              <li onClick={() => searchGender('Female')}>
                <input type="radio" name="menuCheck" id="woman" />
                <label htmlFor="woman">Woman</label>
              </li>
              <li onClick={() => searchGender('unisex')}>
                <input type="radio" name="menuCheck" id="unissex" />
                <label htmlFor="unissex">Unissex</label>
              </li>
              <li onClick={() => searchType('casual')}>
                <input type="radio" name="menuCheck" id="casual" />
                <label htmlFor="casual">Casual</label>
              </li>
              <li onClick={() => searchType('Campo','Society')}>
                <input type="radio" name="menuCheck" id="Soccer" />
                <label htmlFor="Soccer">Soccer</label>
              </li>
              <li onClick={() => searchType('Corrida')}>
                <input type="radio" name="menuCheck" id="Running" />
                <label htmlFor="Running">Running</label>
              </li>
            </div>
          </ul>
          <h1>Colors</h1>
          <div className='colorsColection'>
            {
              colors.map((color:string) => {
                return(
                  <BoxColor key={color} colorBg={`${color}`} onClick={() => { searchColor(`${color}`)}}/>
                )
              })
            }
          </div>

          <MainPriceS>
            <div className='divInputsPrrice'>
              <div className='divInputs'>
                <label htmlFor="">below:</label>
                <input type="number" maxLength={5} minLength={0} value={below} onChange={(e:any)=>{setBelow(e.target.value)}}/>
              </div>
              <div className='divInputs'>
                <label htmlFor="">above:</label>
                <input type="number" maxLength={5} minLength={0} value={above} onChange={(e:any)=>{setAbove(e.target.value)}}/>
              </div>
            </div>
            <button onClick={(event) => {
              event.preventDefault()
              searchToPrice(below, above)
            }}>Buscar preco</button>
            
          </MainPriceS>
        </AsideMenu>

        <MainShowCase>
          <h1>{nameTitle} Shoes</h1>
          <DivItensShowCase>
            { search.map((raid) => {
              return (
                <CardItem key={raid.id}>
                  <BackGroundDivCard backgroundImage={`${raid.image}`}/>
                  <p>{raid.name}</p>
                  <span>{raid.gender}</span>
                  <span>$ {raid.price}</span>
                  <button>+ Cart</button>
                </CardItem>
              )
            })
              
            }

          </DivItensShowCase>
        </MainShowCase>
      </BodyShoesPage>
    <Footer/>
    </>
  )
}

export default Nike;