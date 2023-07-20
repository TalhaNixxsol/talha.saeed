from numpy.typing import ArrayLike
import numpy as np
from numpy.typing import NDArray

from .. import gloo
from .visual import Visual

_VERTEX_SHADER: str = ...

_FRAGMENT_SHADER: str = ...

class LinearRegionVisual(Visual):

    _shaders: dict = ...

    def __init__(
        self,
        pos: ArrayLike | tuple | NDArray | None = None,
        color: ArrayLike | tuple = [1.0, 1.0, 1.0, 1.0],
        vertical=True,
        **kwargs,
    ): ...
    def set_data(
        self,
        pos: ArrayLike | tuple | NDArray | None = None,
        color: ArrayLike | tuple | None = None,
    ): ...
    @property
    def color(self): ...
    @property
    def pos(self): ...
    def _compute_bounds(self, axis, view): ...
    @property
    def is_vertical(self): ...
    def _prepare_transforms(self, view=None): ...
    def _prepare_draw(self, view=None): ...
