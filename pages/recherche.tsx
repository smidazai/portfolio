import { Fragment } from "react";

export default function RecherchePage() {
  return (
    <Fragment>
    <section>
      <h1 className="font-bold text-3xl font-serif">Recherche</h1>
      <a className="my-5 max-w-sm w-full lg:max-w-full lg:flex" href="https://www.sciencedirect.com/science/article/abs/pii/S0167947321002127" target="_blank">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("https://ars.els-cdn.com/content/image/1-s2.0-S0167947321X00114-cov200h.gif")`, backgroundSize: "auto" }}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">A Wilcoxon-Mann-Whitney spatial scan statistic for functional data.</div>
            <p className="text-gray-700 text-base">Computational Statistics and Data Analysis.</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Smida, Z., Cucala, L., Gannoun, A. and Durif, G. (2021)</p>
            </div>
          </div>
        </div>
      </a>
      
      <a className="my-5 max-w-sm w-full lg:max-w-full lg:flex" href="https://www.tandfonline.com/doi/abs/10.1080/10485252.2022.2064997?journalCode=gnst20" target="_blank">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("https://www.tandfonline.com/action/showCoverImage?doi=10.1080/gnst20.v034.i02")`, backgroundSize: "auto" }}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">A median test for functional data.</div>
            <p className="text-gray-700 text-base">Journal of Nonparametric Statistics.</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Smida, Z., Cucala, L., Gannoun, A. and Durif, G. (2022).</p>
            </div>
          </div>
        </div>
      </a>
      
      <a className="my-5 max-w-sm w-full lg:max-w-full lg:flex" target="_blank" href="https://journal.r-project.org/articles/RJ-2022-045/">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("https://journal.r-project.org/resources/rlogo.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
      </div>  
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">HDSpatialScan: Multivariate and Functional Spatial Scan Statistics.</div>
          <p className="text-gray-700 text-base">The R Journal.</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Frévent, C., Ahmed, M.S., Soula, J., Smida, Z., Cucala, L., Dabo-Niang, S. and Genin, M. (2022).</p>
          </div>
        </div>
      </div>
      </a>
    </section>
    <section>
    <h1 className="font-bold text-3xl font-serif my-5">Prépublications</h1>
    <div className="my-5 max-w-sm w-full lg:max-w-full lg:flex">
        <a className="border-r border-b border-l border-t border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full" href="https://gdurif.pages.math.cnrs.fr/funStatTest/" target="_blank">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">funStatTest: Statistical Testing For Functional Data.</div>
            <p className="text-gray-700 text-base">R package version 0.0.1.</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Smida, Z., Durif, G., Cucala, L. (2023).</p>
            </div>
          </div>
        </a>
      </div>
    </section>
    <section>
      <h1 className="font-bold text-3xl font-serif">Conférences et Séminaires</h1>
      <div className="my-5 relative m-8">
        <div className="border-r-2 border-gray-500 absolute h-full top-0" style={{ left: "15px" }}></div>
        <ul className="list-none m-0 p-0">
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Mars 2019 - Participation aux journées de doctorantes en probabilités</div>
            </div>
            <div className="ml-12">
              Université de Montpellier.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Mars 2019 - Participation aux journées de doctorantes en probabilités</div>
            </div>
            <div className="ml-12">
              Université de Montpellier.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Juin 2019 - Participation aux  51èmes Journées de Statistique de la Société Française de Statistiques</div>
            </div>
            <div className="ml-12">
              Université de Lorraine, Nancy.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Juin 2020 - Communication acceptée aux 52èmes Journées de Statistique de la Société Française de Statistiques (reportées en 2021)</div>
            </div>
            <div className="ml-12">
              Nice.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Mai 2021 - Séminaire Co-organisé par le laboratoire de Mathématiques de l’Université d’Avignon et l’Unité BioSP d’INRAE d’Avignon.</div>
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Juin 2021 - Exposé aux 52èmes Journées de Statistique de la Société Française de Statistique</div>
            </div>
            <div className="ml-12">
              Nice.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Oct. 2021 - Séminaire de Probabilités et Statistique, Institut Montpelliérain Alexender Grothendieck</div>
            </div>
            <div className="ml-12">
              Montpellier.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Nov. 2021 - Séminaire de doctorant.e.s de Montpellier</div>
            </div>
            <div className="ml-12">
              Institut Montpelliérain Alexender Grothendieck, Montpellier.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Déc. 2021 - Exposé au Forum des Jeunes Mathématicien-ne-s</div>
            </div>
            <div className="ml-12">
              Besançon.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Fév. 2022 - 10ème Journée YSP: Young Probabilists and Statisticians, IHP</div>
            </div>
            <div className="ml-12">
              Paris.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Mars 2022 - Séminaire de doctorant.e.s de Montpellier</div>
            </div>
            <div className="ml-12">
              Institut Montpelliérain Alexender Grothendieck, Montpellier.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Avr. 2022 - Exposé aux 9èmes Rencontres des Jeunes Statisticien-ne-s</div>
            </div>
            <div className="ml-12">
              Porquerolles.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Mai 2022 - Exposé aux 20th International Workshop in Spatial Econometrics and Statistics</div>
            </div>
            <div className="ml-12">
              Lille.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Juin 2022 - Poster aux 2èmes Journées IMAG-IMT</div>
            </div>
            <div className="ml-12">
              Montpellier.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Juin 2022 - Exposé au Journée des doctorants à l’IMAG</div>
            </div>
            <div className="ml-12">
              Montpellier.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Août 2022 - Exposé au 24th International Conference on Computational Statistics</div>
            </div>
            <div className="ml-12">
              Bologna, Italy.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Déc. 2022 - MAD-Stat seminar</div>
            </div>
            <div className="ml-12">
              Toulouse School of Economics, Toulouse.
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-500 rounded-full h-8 w-8"></div>
              <div className="flex-1 ml-4 font-medium">Fév. 2023 - Séminaire de Probabilités-Statistique</div>
            </div>
            <div className="ml-12">
              Laboratoire de mathématiques de Besançon, Besançon.
            </div>
          </li>
        </ul>
      </div>
    </section>
    </Fragment>
  );
}
