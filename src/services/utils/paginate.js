import _ from "lodash";
import PropTypes from "prop-types";
import Pagination from "../../components/common/pagination";

export function paginate(movies, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(movies)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
