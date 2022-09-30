import FullWidthLayout from "hocs/layouts/FullWidthLayout";

function ErrorInProgress(){
    return(
        <FullWidthLayout>
            <div class="bg-white py-12">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 class="text-lg font-semibold text-indigo-600">Oops</h2>
                        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Sorry, this page is still in progress</p>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    )
}

export default ErrorInProgress