const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    const cars = ['BMW','VW'] //array to store car

    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');

    return{
        add(car){
            cars.push(car)
        },
        remove(index){
            cars.splice(index, 1)
        },
        render(){
            const html = cars.map((car,index) => `
                <li>
                    ${car}
                    <span class="delete" data-index = "${index}"><button>Delete</button></span>
                </li>
                <br />
            `).join('');

            root.innerHTML = html
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete') 
            if(deleteBtn){
                const index = deleteBtn.dataset.index
                this.remove(index)
                this.render()
            }
        },
        init(){ // khoi tao
            // const _this = this;
            // const that = this;
            // handel DOM events
            submit.onclick = () => {
                const car = input.value
                if (!car) {
                    alert('car name can not be empty!')
                } else {
                    this.add(car)
                    this.render()
                    input.value = null
                    input.focus()
                }
            }
            input.onkeyup = (e) => {
                if (e.which === 13 && input.value != '') {
                    submit.onclick()
                }else if(input.value == ''){
                    alert('car name can not be empty!')
                }
            }
            root.onclick = this.handleDelete.bind(this)

            this.render();
        }
    }
})();

app.init();