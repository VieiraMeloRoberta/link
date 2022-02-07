import { Link } from "react-router-dom";

//BUSCAR OS LINKS SALVOS
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

//SALVAR UM LINK NO localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //SE JÁ TIVER UM LINK SALVO COM ALGUM ID EU NÃO VOU DEIXAR DUPLICAR
    const hasLink = linksStored.some(Link => Link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA!')
        return;
    }

    //ADICIONAR ESSE NOVO LINK NA LISTA ..
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso!');
}

//DELETAR ALGUM LINK SALVO
export function deleteLink(links, id){

    let myLinks = links.filter( item => {
        return (item.id !== id)
    })
    localStorage.setItem('@gerarLink', JSON.stringify(myLinks));
    console.log("LINK DELETADO COM SUCESSO")

    return myLinks;
}