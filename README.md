# Códigos do Sistema

**Nota:** Ao fazer alguma adição ao código, rodar o comando `git checkout -b <seu_nome>` nesta branch e, depois de fazer todas as suas atualizações, o `git merge sistema` para unir à branch principal.

> Cuidado com os conflitos do `merge` e **sempre** faça um `update` antes do `commit`.
 
# GitHub
- Baixar as atualizações das branchs `git pull` na branch sistema;
- Trocar de branch `git switch NOMEDABRANCH` ou `git checkout NOMEDABRANCH` **Obs:** Você não irá conseguir trocar de branch se acaso você tiver alterações na sua branch atual;
- Para mandar as atualizações baixadas na branch `sistema` para a sua branch **Obs:** faça o `switch` ou `checkout` para a **sua branch** e depois `git merge sistema`;
- Para subir um `commit` para o **GitHub** de sua branch faça `git add -u` logo depois `git commit -m " ESCREVA SUA MENSAGEM SOBRE O COMMIT " ` e em seguida para subir **definitivamente** para o **GitHub** faça `git push`;
- Ao concluir sua tarefa, para mandar suas alterações da branch atual para a branch `sistema` faça `git switch sistema` ou `git checkout sistema` e em seguida faça `git merge NomeDaSuaBranch` **cuidado** com os conflitos!!! e arrume cada um deles antes de subir o `commit`.

## Padronizações Gerais ##

# Pastas e arquivos
> As pastas devem seguir um padrão de pasta "pai"(principal) começar com letra `minúscula` e a pasta "filho" que ficam dentro da pasta "pai" começarem com letra `maíuscula`, arquivos `.js` **sempre** com letra `minúscula`
**Obs** as pastas da `pages` são as únicas que contem `_`(underline) apenas para melhor entendimento das páginas, já as demais apenas letra maíuscula para cada espaçamento de palavra como no exemplo `CardEstadoMunicipio`.

# styles.js
>**Nota:** Algumas alterações poderam ocorrer devido a complexidade das telas, devido a isto está padronização seria o mais desejável possível para cada estilo criado, tendo assim uma melhor visualização/manutenção.
**Obs:** Nem toda página terá os tópicos mencionados, baseiem-se apenas na necessidade de utilização.
Separação da estruturação do "styles" pelas variáveis:
- `container`: É a base de uma view, tendo dentro desta View:
- `header` Separação de conteúdo no topo/cabeçalho da página;
- `body`   Separação de conteúdo no meio/corpo da página;
- `footer` Separação de conteúdo em baixo/rodapé da página;
- `column` Direção em colunas;
- `row`    Direção em linhas;
- `title`  Estilização do título;
- `text`   Estilização do texto;
- `button` Estilização do botão;
- `icon`   Estilização do icone;
- `image`  Estilização da imagem;
- `Primary` Principal, é usado quando terá uma segunda variação de estilo;
- `Secondary` Secundário é a variação de estilo do primário;
- `One,Two,Three...` É usado quando possui inúmeras variações.

>Montagem no arquivo:
**Obs:** Toda variável "pai" se inicia com letra minúscula, e a variável "filho" inicia com maiúsculo **exemplo:** para o `header`(pai), no header terá um título e uma separação de conteúdo em linhas logo teremos no arquivo styles `headerTitle`(paiFilho) e `headerRow`(paiFilho); Então para alterações que serão inseridas na `View` de um `header` como no exemplo dito, logo usamos como inicio da variável a letra minúscula header e logo em seguida maiúscula headerTitle, headerRow, para assim definirmos que aquela "estilização" será utilizada **SOMENTE** no `header`, para os demais serão criados seguindo o mesmo padrão minúsculo e maiúsculo.
**Obs:** É apenas um exemplo, e para cada tela poderá ter diversas opções de estilos.
- `container` Peça principal da página que terá todo o resto:
- `header` Começo da página, tendo o estilo do card
- `headerTitle` Titulo que será usado somente no começo da página
- `body` Meio da página, tendo o estilo do card
- `bodyRow` Orientação de conteúdo em linha que será usado somente no body da página
- `bodyTextPrimary` Estilo de texto que geralmente é o principal, e será usado somente no body/meio da página
- `bodyTextSecondary` Estilo de texto que geralmente é a variação do principal, e será usado somente no body/meio da página
- `bodyButtonPrimary` Estilo de botão que será usado como principal, e será usado somente no body/meio da página
- `bodyButtonSecondary` Estilo de botão que é uma variação do principal, e será usado somente no body/meio da página
- `footer` Fim da página, tendo o estilo do rodapé
- `footerText` Estilo do texto do fim da página
- `footerIconOne` Estilo do primeiro icone a ser usado no fim da página
- `footerIconTwo` Estilo do segundo icone a ser usado no fim da página