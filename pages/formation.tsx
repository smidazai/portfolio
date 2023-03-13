export default function FormationPage() {
    return (
    <section>
        <h1 className="font-bold text-3xl font-serif">Formation</h1>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-12">
                <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <div>2018-2021</div>
                            </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                        <p  className="text-gray-900 dark:text-gray-100">Doctorat en Statistique</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-300">Institut Montpelliérain Alexander Grothendieck, Université de Montpellier, France. </p>
                                    </h2>
                                </div>
                            </div>
                            <div className="text-base font-medium leading-6">
                                <ul className="list-outside list-disc">
                                    <li className="text-gray-500 dark:text-gray-4"><b>Titre: </b>Tests de comparaison de deux populations et statistiques de balayage spatial pour données fonctionnelles.</li>
                                    <li className="text-gray-500 dark:text-gray-4"><b>Directeurs de thèse : </b>Ali Gannoun (IMAG, Université de Montpellier) et Lionel Cucala (IMAG, Université de Montpellier). Sontenu le 30 Novembre 2021.</li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                </article>
            </li>

            <li className="py-12">
                <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <div>2017–2018</div>
                            </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                        <p  className="text-gray-900 dark:text-gray-100">Mastère de Recherche en Mathématiques et Applications.</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-300">Faculté des Sciences de Monastir, Université de Monastir, Tunisie.</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-300">Stage de M2 (en parteneriat avec l'Université de Montpellier).</p>
                                    </h2>
                                </div>
                            </div>
                            <div className="text-base font-medium leading-6">
                                <ul className="list-outside list-disc">
                                    <li className="text-gray-500 dark:text-gray-4"><b>Titre: </b>Estimation non paramétrique de la régression par la méthode des polynômes locaux.</li>
                                    <li className="text-gray-500 dark:text-gray-4"><b>Directeurs de stage : </b>Ali Gannoun (IMAG, Université de Montpellier) et Mouna Ayachi (Département de Mathématiques, Université de Monastir)</li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                </article>
            </li>

            <li className="py-12">
                <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <div>2014–2015</div>
                            </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                        <p  className="text-gray-900 dark:text-gray-100"> Licence Fondamentale en Mathématiques. </p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-300">Faculté des sciences de Monastir, Université de Monastir, Tunisie. </p>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </section>
    );
}